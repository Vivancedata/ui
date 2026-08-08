# @vivancedata/ui

<p align="center">
  <img src="docs/assets/hero.png" alt="ui preview" width="640">
</p>

The Vivancedata design system: a Geist-structured, brand-preserving component
library for the Vivancedata sites. React 18/19, Tailwind CSS, Radix primitives.

The design language — the token contract, the four deliberate departures from
Geist, the type ladder, the elevation model, and the Do/Don't lists — is
specified in [`DESIGN.md`](./DESIGN.md). That file is the source of truth;
this README covers installation and API.

## Installation

Consumers currently install from a GitHub release tarball (see
[Publishing](#publishing) for why):

```json
"dependencies": {
  "@vivancedata/ui": "https://github.com/Vivancedata/ui/archive/refs/tags/v0.3.0.tar.gz"
}
```

Once the package is on npm, this becomes `"@vivancedata/ui": "^0.3.0"`.

### Peer dependencies

```bash
npm install react react-dom framer-motion tailwindcss
```

| Peer | Range |
|------|-------|
| `react` / `react-dom` | `>=18.0.0` |
| `framer-motion` | `>=10.0.0` |
| `tailwindcss` | `>=3.4.0` |

## Setup

### 1. Import the styles

In your root layout:

```tsx
import "@vivancedata/ui/styles";
```

This brings in the token definitions (light and dark), the CSS reset
integration, and the utility classes (`.eyebrow`, `.hero-mesh`).

### 2. Configure Tailwind

```ts
import type { Config } from "tailwindcss";
import vivanceTailwindPreset from "@vivancedata/ui/tailwind";

const config: Config = {
  presets: [vivanceTailwindPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    // The package ships TypeScript source; scan it so utilities used only
    // inside @vivancedata/ui components survive Tailwind's tree-shake.
    "./node_modules/@vivancedata/ui/src/**/*.{ts,tsx}",
  ],
};

export default config;
```

### 3. Next.js specifics

The package's `import` entry points at TypeScript source, so Next must compile
it — and telling Next to optimize the barrel keeps unused components out of
your bundles:

```ts
// next.config.ts
const nextConfig = {
  transpilePackages: ["@vivancedata/ui"],
  experimental: {
    optimizePackageImports: ["@vivancedata/ui"],
  },
};
```

### 4. Use the package `cn()` — not a local copy

```ts
// src/lib/utils.ts — the whole file
export { cn } from "@vivancedata/ui";
```

This matters. The design system's named type scale (`text-heading-1`,
`text-body-sm`, …) is unknown to stock `tailwind-merge`, which classifies those
classes as text *colours* and silently deletes whichever of the size/colour
pair comes first in a `cn()` call. The package's `cn` registers the scale as
font sizes. A locally defined `cn(...inputs) { return twMerge(clsx(inputs)) }`
reintroduces the bug in every file that imports it.

### 5. Providers

Wrap the app in `TooltipProvider` if you use tooltips, and mount `Toaster`
once if you use toasts:

```tsx
import { TooltipProvider, Toaster } from "@vivancedata/ui";

export default function RootLayout({ children }) {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  );
}
```

## Quick start

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@vivancedata/ui";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manufacturing</CardTitle>
        <Badge>Industry</Badge>
      </CardHeader>
      <CardContent>
        <Button shape="pill">Talk to us</Button>
        <Button variant="secondary">Learn more</Button>
      </CardContent>
    </Card>
  );
}
```

`Button` follows the Geist bimodal-radius rule: `shape="square"` (6px, the
default) for in-flow actions, `shape="pill"` for standalone CTAs.

## Component catalog

Everything below is exported from the package root.

### Form and input

| Component | Notes |
|-----------|-------|
| `Button`, `buttonVariants` | `variant`: default, secondary, outline, ghost, link, destructive · `shape`: square, pill |
| `Input`, `inputVariants` | |
| `Textarea`, `textareaVariants` | |
| `Label`, `labelVariants` | |
| `Checkbox` | Radix |
| `Switch` | Radix |
| `RadioGroup`, `RadioGroupItem` | Radix |
| `Select` family | Radix — `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, … |

### Overlay and navigation

| Component | Notes |
|-----------|-------|
| `Dialog` family | Radix |
| `AlertDialog` family | Radix |
| `DropdownMenu` family | Radix |
| `NavigationMenu` family, `navigationMenuTriggerStyle` | Radix |
| `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider` | Radix |
| `Command` family, `CommandDialog` | cmdk-based command menu |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | Radix |
| `Accordion` family | Radix |

### Display and feedback

| Component | Notes |
|-----------|-------|
| `Card` family, `cardVariants` | Flat by default; 1px hairline border |
| `Badge`, `badgeVariants` | |
| `Alert`, `AlertTitle`, `AlertDescription` | |
| `Avatar`, `AvatarImage`, `AvatarFallback` | |
| `Skeleton`, `SkeletonText`, `SkeletonCard`, `SkeletonInput`, `SkeletonButton`, `SkeletonAvatar` | |
| `Spinner`, `PageSpinner`, `BorderSpinner` | |
| `Progress`, `ProgressCircle`, `ProgressCircleSkeleton` | |
| `StatusBadge` | Semantic status colours |
| `Toaster`, `useToast`, `toast` | Radix toast; mount `Toaster` once |
| `Carousel` family | embla-carousel |
| `ScrollArea`, `ScrollBar` | Radix |
| `Separator` | Radix |
| `ErrorBoundary`, `DefaultErrorFallback` | |

### Layout and typography

| Component | Notes |
|-----------|-------|
| `Container`, `containerVariants` | Max-width page container |
| `Section`, `sectionVariants` | Vertical rhythm wrapper |
| `Heading`, `headingVariants` | Renders the DESIGN.md type ladder — `level`: display-xl…h4 · `variant`: default, muted, brand |
| `Paragraph`, `paragraphVariants` | Body copy on the ladder — `size`: lg, default, sm · `variant`: muted (default), default |

### Theming

| Component | Notes |
|-----------|-------|
| `ThemeProvider` | next-themes wrapper |
| `ThemeToggle` | Light/dark toggle |

## Hooks

| Hook | Returns |
|------|---------|
| `useMediaQuery(query)` | boolean, SSR-safe |
| `useIsMobile()` / `useIsTablet()` / `useIsDesktop()` | breakpoint booleans |
| `usePrefersDarkMode()` | boolean |
| `usePrefersReducedMotion()` | boolean — gate animations on this |
| `useIsClient()` | false during SSR, true after hydration |
| `useToast()` | toast state + `toast`/`dismiss` |

## Utilities

| Export | Purpose |
|--------|---------|
| `cn(...inputs)` | clsx + tailwind-merge, aware of the named type scale |
| `formatCurrency(amount, currency?, locale?)` | Intl-based |
| `formatRelativeTime(date, locale?)` | "2 days ago" |
| `generateId(prefix?)` | random DOM-safe id |
| `debounce(fn, wait)` | |
| `isClient` / `isServer` | environment booleans |

## Animation presets

Framer-motion variants, exported for use with `m.*` components:
`fadeInUp`, `fadeIn`, `fadeInScale`, `scaleUp`, `slideIn`, `slideInLeft`,
`slideInRight`, `stagger`, `staggerContainer` / `staggerItem` (and the
`*Variants` aliases), `photoReveal`, `iconPop`, `parallaxScroll`, plus the
spring configs `springGentle`, `springSnappy`, `springBouncy`.

Motion is feature-loaded via `LazyMotion` — consumers should render `m.*`
elements inside a provider that supplies `domAnimation` (see the apps'
`MotionProvider`), and gate non-essential animation on
`usePrefersReducedMotion()`.

## Design tokens

Defined in `src/styles/globals.css` as HSL triplets, consumed as
`hsl(var(--token))`, mapped to Tailwind utilities by `tailwind.preset.ts`.
The full contract — including the measured contrast constraints and the
`--accent`-is-not-the-brand trap — is in [`DESIGN.md`](./DESIGN.md). Highlights:

| Token | Light | Dark |
|-------|-------|------|
| `--background` | near-white `0 0% 98%` | true black `0 0% 0%` |
| `--foreground` | ink `0 0% 9%` | `0 0% 93%` |
| `--primary` | ink (buttons are ink, not green) | inverted |
| `--brand` | deep green `152 52% 20%` | lightened `152 45% 45%` |
| `--accent` | neutral hover wash `0 0% 96%` — **not** the brand colour | |
| `--border` | hairline `0 0% 92%` | |

Radius: `sm` 6px · `md` 12px · `lg`/`xl` 16px · `2xl` 20px · `pill` 100px.
Elevation: two shadow levels (`shadow-1`, `shadow-2`); depth is expressed with
1px hairlines, not shadow stacks.

## Boundary checker

The package ships a bin that fails CI when an app re-implements a component
the design system already provides:

```json
"scripts": {
  "check:ui-boundary": "vivance-ui-boundary --allow header.tsx,form.tsx"
}
```

Files under the consumer's `components/ui/` must be thin re-exports from
`@vivancedata/ui`; `--allow` lists deliberate exceptions.

## Publishing

Consumers currently resolve this package from a **GitHub release tarball**:

```json
"@vivancedata/ui": "https://github.com/Vivancedata/ui/archive/refs/tags/v0.3.0.tar.gz"
```

That works in a standalone Vercel build with no registry auth, which is why it
was chosen: the apps each deploy from their own repository, where a sibling
`../ui` directory does not exist. Reaching this package by a path that only
exists on a developer laptop is what kept `vivancedata` un-deployable from
2026-02-22 to 2026-07-31.

`dist/` is committed for exactly this reason — a git archive contains the
repository, not an npm-packed artifact, so the built output has to be in the
tree for the tarball to be consumable.

### Cutting a release

1. Bump `version` in `package.json`.
2. Rebuild and commit `dist/` (`npm run build`).
3. Update `.react-doctor-baseline` if the score improved.
4. Merge to `main`, then `gh release create vX.Y.Z`.
5. Update the tarball URL in `vivancedata`, `learn`, and `crm`, and regenerate
   each lockfile with **npm 10** — the major that Node 22 ships and CI runs. A
   lockfile written by npm 11 is rejected by npm 10's `npm ci`.

### Moving to npm (optional, not currently planned)

`.github/workflows/release.yml` only *verifies* a `v*` tag (version match,
typecheck, tests, build) — it does not publish anywhere, because the tarball
above **is** the distribution channel. An earlier version of the workflow
tried to `npm publish` and failed every release at the final step for lack of
an `NPM_TOKEN` secret nobody had.

If public npm distribution is ever wanted: create an npm automation token
with publish rights to the `@vivancedata` scope, add it as an `NPM_TOKEN`
repository secret, and restore a publish step
(`npm publish --access public --provenance`, with
`registry-url: 'https://registry.npmjs.org'` on the setup-node step and
`id-token: write` permission). The consumers could then use a semver range
(`^0.3.0`) instead of a URL to bump per release. Until someone wants that,
the tarball resolves correctly and no token is needed.

## Package exports

| Entry | Resolves to |
|-------|-------------|
| `@vivancedata/ui` | components, hooks, utilities (TS source on `import`, CJS build on `require`) |
| `@vivancedata/ui/styles` | `src/styles/globals.css` |
| `@vivancedata/ui/tailwind` | `tailwind.preset.ts` |
| `@vivancedata/ui/tailwind-config` | ready-made `tailwind.config.ts` |

## Development

```bash
npm ci             # install
npm run dev        # tsup watch mode
npm run build      # CJS + ESM + d.ts into dist/
npm test           # vitest
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

CI enforces lint, typecheck, a React Doctor ratchet (`.react-doctor-baseline`),
test coverage, and the build.

## License

MIT
