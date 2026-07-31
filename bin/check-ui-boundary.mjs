#!/usr/bin/env node

/**
 * Enforces the design-system boundary in a consuming app.
 *
 * Every file in the app's `src/components/ui` directory must be a thin
 * re-export from `@vivancedata/ui`, or be explicitly allowlisted as
 * app-specific. Anything else is a component the app has forked away from the
 * design system, which is how two sites silently stop looking alike.
 *
 * This ships INSIDE @vivancedata/ui rather than living in each app or at the
 * workspace root, because the apps deploy from their own repositories where a
 * sibling or parent path does not exist. A checker the deploy can't reach is a
 * checker that doesn't run.
 *
 * Usage:
 *   vivance-ui-boundary [--dir src/components/ui] [--allow a.tsx,b.tsx]
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function readFlag(name, fallback) {
  const index = args.indexOf(`--${name}`);
  if (index === -1) return fallback;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) {
    console.error(`Flag --${name} requires a value.`);
    process.exit(2);
  }
  return value;
}

const uiDir = readFlag("dir", "src/components/ui");
const allowedLocalFiles = new Set(
  readFlag("allow", "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
);

const appName = path.basename(process.cwd());
const uiDirectory = path.resolve(process.cwd(), uiDir);

if (!existsSync(uiDirectory)) {
  console.error(`UI boundary check failed for "${appName}": ${uiDir} does not exist.`);
  process.exit(1);
}

const violations = [];

for (const filePath of walkFiles(uiDirectory)) {
  const relativePath = path.relative(uiDirectory, filePath);

  if (!/\.(ts|tsx)$/.test(relativePath)) continue;
  if (allowedLocalFiles.has(relativePath)) continue;

  if (!isThinUiReExport(readFileSync(filePath, "utf8"))) {
    violations.push(relativePath);
  }
}

if (violations.length > 0) {
  console.error(`UI boundary check failed for "${appName}".`);
  console.error(
    `Files in ${uiDir} must re-export from "@vivancedata/ui" (or "@vivancedata/ui/components/*"), or be allowlisted via --allow.`
  );
  console.error("");
  console.error("Violations:");
  for (const violation of violations) console.error(`- ${violation}`);
  if (allowedLocalFiles.size > 0) {
    console.error("");
    console.error("Currently allowlisted as app-specific:");
    for (const fileName of allowedLocalFiles) console.error(`- ${fileName}`);
  }
  process.exit(1);
}

console.log(`UI boundary check passed for "${appName}" (${uiDir}).`);

function walkFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
      continue;
    }
    files.push(fullPath);
  }
  return files;
}

function isThinUiReExport(source) {
  const stripped = stripComments(source).trim();
  const withoutUseClient = stripped.replace(/^["']use client["'];?\s*/, "").trim();

  if (!withoutUseClient) return false;

  return /^(export\s+(type\s+)?\{[\s\S]*?\}\s+from\s+["']@vivancedata\/ui(?:\/components\/[\w-]+)?["'];?\s*)+$/.test(
    withoutUseClient
  );
}

function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
}
