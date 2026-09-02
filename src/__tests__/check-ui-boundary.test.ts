/**
 * The boundary bin runs inside a consuming app, so drive it as a child
 * process against a throwaway app directory. The fork check derives its
 * component list from this package's own src/index.ts, which is why the
 * assertions name real exports (Badge, Button) rather than fixtures.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

const bin = path.resolve(__dirname, "../../bin/check-ui-boundary.mjs");

let appDir: string;
let uiDir: string;

function writeUiFile(name: string, source: string) {
  writeFileSync(path.join(uiDir, name), source);
}

function runBoundary(...flags: string[]) {
  try {
    const stdout = execFileSync(process.execPath, [bin, ...flags], {
      cwd: appDir,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { status: 0, stdout, stderr: "" };
  } catch (error) {
    const failure = error as { status: number; stdout: string; stderr: string };
    return { status: failure.status, stdout: failure.stdout, stderr: failure.stderr };
  }
}

const forkedBadge = `import * as React from "react";
import { cva } from "class-variance-authority";
const badgeVariants = cva("inline-flex");
export function Badge() { return React.createElement("span"); }
export { badgeVariants };
`;

describe("check-ui-boundary", () => {
  beforeEach(() => {
    appDir = mkdtempSync(path.join(tmpdir(), "vivance-ui-boundary-"));
    uiDir = path.join(appDir, "src", "components", "ui");
    mkdirSync(uiDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(appDir, { recursive: true, force: true });
  });

  it("passes when every file is a thin re-export", () => {
    writeUiFile("badge.tsx", 'export { Badge, badgeVariants, type BadgeProps } from "@vivancedata/ui";\n');
    writeUiFile("button.tsx", '"use client";\n\nexport { Button, buttonVariants } from "@vivancedata/ui";\n');

    const result = runBoundary();

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("UI boundary check passed");
  });

  it("fails on a fork of a package component and names the import to use", () => {
    writeUiFile("badge.tsx", forkedBadge);

    const result = runBoundary();

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Forks:");
    expect(result.stderr).toContain('badge.tsx forks @vivancedata/ui "badge"');
    expect(result.stderr).toContain(
      'export { Badge, badgeVariants, type BadgeProps } from "@vivancedata/ui";'
    );
  });

  it("does not let --allow excuse a fork", () => {
    writeUiFile("button.tsx", "export function Button() { return null; }\n");

    const result = runBoundary("--allow", "button.tsx");

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('button.tsx forks @vivancedata/ui "button"');
    expect(result.stderr).toContain("Forks cannot be allowlisted");
  });

  /**
   * `button` is the FIRST `./components/*` export in src/index.ts, and the
   * exports above it (utils, animations, hooks) are the ones a lazy
   * `[\s\S]*?` clause swallows into button's names list. Assert the exact
   * one line, and that it is one line.
   */
  it("prints one clean re-export line for the first component in the index", () => {
    writeUiFile("button.tsx", "export function Button() { return null; }\n");

    const result = runBoundary();
    const printed = result.stderr
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("export ") && line.includes('"@vivancedata/ui"'));

    expect(printed).toEqual(['export { Button, buttonVariants, type ButtonProps } from "@vivancedata/ui";']);
    expect(result.stderr).not.toContain("./lib/utils");
  });

  it("still reports app-local files that are neither re-exports nor allowlisted", () => {
    writeUiFile("data-table.tsx", "export function DataTable() { return null; }\n");

    const result = runBoundary();

    expect(result.status).toBe(1);
    expect(result.stderr).not.toContain("Forks:");
    expect(result.stderr).toContain("Violations:");
    expect(result.stderr).toContain("- data-table.tsx");
  });

  it("accepts an allowlisted app-local file", () => {
    writeUiFile("data-table.tsx", "export function DataTable() { return null; }\n");

    const result = runBoundary("--allow", "data-table.tsx");

    expect(result.status).toBe(0);
  });

  it("reports forks and local violations together, forks first", () => {
    writeUiFile("badge.tsx", forkedBadge);
    writeUiFile("data-table.tsx", "export function DataTable() { return null; }\n");

    const result = runBoundary();

    expect(result.status).toBe(1);
    expect(result.stderr.indexOf("Forks:")).toBeGreaterThan(-1);
    expect(result.stderr.indexOf("Forks:")).toBeLessThan(result.stderr.indexOf("Violations:"));
  });

  it("fails when the ui directory is missing", () => {
    rmSync(uiDir, { recursive: true });

    const result = runBoundary();

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("does not exist");
  });
});
