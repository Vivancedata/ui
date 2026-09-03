#!/usr/bin/env node

/**
 * Enforces the design-system boundary in a consuming app.
 *
 * Every file in the app's `src/components/ui` directory must be a thin
 * re-export from `@vivancedata/ui`, or be explicitly allowlisted as
 * app-specific. Anything else is a component the app has forked away from the
 * design system, which is how two sites silently stop looking alike.
 *
 * Two classes of violation, reported separately:
 *
 * 1. A **fork**: a file whose basename matches a component the package index
 *    exports (`badge.tsx` next to the package's `badge`). The app has its own
 *    copy of something it could import. Forks are never allowlistable; the
 *    fix is to replace the file with the printed one-line re-export.
 * 2. A **local file**: anything else that is not a thin re-export. Allowed
 *    only via `--allow`, which names deliberate app-specific exceptions
 *    (`header.tsx`, or `form.tsx` while the package does not export Form).
 *
 * The exported-component list is derived from the package's own
 * `src/index.ts`, cross-checked against `src/components/`, so it cannot drift
 * from what the package actually ships.
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
import { fileURLToPath } from "node:url";

const PACKAGE_NAME = "@vivancedata/ui";
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

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

const packageComponents = readPackageComponents();

const forks = [];
const violations = [];

for (const filePath of walkFiles(uiDirectory)) {
  const relativePath = path.relative(uiDirectory, filePath);

  if (!/\.(ts|tsx)$/.test(relativePath)) continue;
  if (isThinUiReExport(readFileSync(filePath, "utf8"))) continue;

  const componentName = path.basename(relativePath).replace(/\.(ts|tsx)$/, "");
  const packageExport = packageComponents.get(componentName);

  if (packageExport) {
    forks.push({ relativePath, componentName, packageExport });
    continue;
  }

  if (allowedLocalFiles.has(relativePath)) continue;
  violations.push(relativePath);
}

if (forks.length > 0) {
  console.error(`UI boundary check failed for "${appName}".`);
  console.error(
    `${forks.length} file(s) in ${uiDir} fork a component that ${PACKAGE_NAME} already exports. Forks cannot be allowlisted; replace each file with the re-export shown.`
  );
  console.error("");
  console.error("Forks:");
  for (const fork of forks) {
    console.error(`- ${fork.relativePath} forks ${PACKAGE_NAME} "${fork.componentName}". Replace its contents with:`);
    console.error(`    ${fork.packageExport}`);
  }
}

if (violations.length > 0) {
  if (forks.length > 0) console.error("");
  else console.error(`UI boundary check failed for "${appName}".`);
  console.error(
    `Files in ${uiDir} must re-export from "${PACKAGE_NAME}" (or "${PACKAGE_NAME}/components/*"), or be allowlisted via --allow.`
  );
  console.error("");
  console.error("Violations:");
  for (const violation of violations) console.error(`- ${violation}`);
  if (allowedLocalFiles.size > 0) {
    console.error("");
    console.error("Currently allowlisted as app-specific:");
    for (const fileName of allowedLocalFiles) console.error(`- ${fileName}`);
  }
}

if (forks.length > 0 || violations.length > 0) process.exit(1);

console.log(
  `UI boundary check passed for "${appName}" (${uiDir}; ${packageComponents.size} package components checked for forks).`
);

/**
 * Map of component basename -> the one-line re-export that replaces a fork,
 * read from the package's own index so the list is whatever the package
 * actually exports today. A component file the index does not export (form,
 * since 6f9b809) is not a fork target: there is nothing to import instead.
 */
function readPackageComponents() {
  const indexPath = path.join(packageRoot, "src", "index.ts");
  const componentsDir = path.join(packageRoot, "src", "components");
  if (!existsSync(indexPath) || !existsSync(componentsDir)) {
    console.error(
      `UI boundary check cannot run: ${PACKAGE_NAME} at ${packageRoot} is missing src/index.ts or src/components.`
    );
    process.exit(2);
  }

  const components = new Map();
  // The clause is `[^{}]*`, not `[\s\S]*?`: a lazy any-character run happily
  // spans from an earlier `export { ... } from "./lib/utils"` all the way to
  // the first `}` that is followed by `./components/...`, swallowing every
  // export in between and printing the lot as one component's re-export line.
  const exportPattern = /export\s+(type\s+)?\{([^{}]*)\}\s+from\s+["']\.\/components\/([\w-]+)["']/g;
  const indexSource = readFileSync(indexPath, "utf8");

  for (const match of indexSource.matchAll(exportPattern)) {
    const [, typeOnly = "", clause, componentName] = match;
    const hasFile = ["ts", "tsx"].some((extension) =>
      existsSync(path.join(componentsDir, `${componentName}.${extension}`))
    );
    if (!hasFile) continue;

    const names = clause
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean)
      .join(", ");
    const existing = components.get(componentName);
    const line = `export ${typeOnly}{ ${names} } from "${PACKAGE_NAME}";`;
    components.set(componentName, existing ? `${existing}\n    ${line}` : line);
  }

  return components;
}

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
