# @vivancedata/ui

A design system and component library for Vivancedata projects. Built with React, Tailwind CSS, and Radix UI primitives.

## Features

- 🎨 **Neumorphic Design** - Soft 3D shadows for that modern, tactile feel
- 🪟 **Glass Effects** - Frosted glass/glassmorphism components
- 🌓 **Dark Mode** - Full dark mode support with carefully tuned colors
- 🎯 **Consistent Design Tokens** - Spacing, typography, colors, and more
- ♿ **Accessible** - Built on Radix UI primitives for a11y compliance
- 📦 **Tree-Shakeable** - Import only what you need

## Installation

```bash
npm install @vivancedata/ui
# or
bun add @vivancedata/ui
# or
pnpm add @vivancedata/ui
```

## Setup

### 1. Import the styles

In your root layout or `globals.css`:

```css
@import "@vivancedata/ui/styles";
```

Or import in your root component:

```tsx
import "@vivancedata/ui/src/styles/globals.css";
```

### 2. Configure Tailwind

Extend your `tailwind.config.ts` with the Vivancedata preset:

```ts
import type { Config } from "tailwindcss";
import vivanceConfig from "@vivancedata/ui/tailwind";

const config: Config = {
  presets: [vivanceConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@vivancedata/ui/dist/**/*.{js,mjs}",
  ],
  // Your customizations here
};

export default config;
```

### 3. Add the TooltipProvider

Wrap your app with `TooltipProvider` for tooltips to work:

```tsx
import { TooltipProvider } from "@vivancedata/ui";

export default function App({ children }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@vivancedata/ui";

export function MyComponent() {
  return (
    <Card variant="neu">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <Badge variant="success">New</Badge>
      </CardHeader>
      <CardContent>
        <p>This is a neumorphic card with the Vivancedata design system.</p>
        <Button variant="neu-primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

### Core Components

| Component | Description |
|-----------|-------------|
| `Button` | Buttons with default, outline, ghost, neu, glass, and glow variants |
| `Card` | Cards with default, neu, glass, and elevated variants |
| `Badge` | Status badges with success, warning, info, and muted variants |
| `Input` | Text inputs with default, neu, and glass variants |
| `Textarea` | Multi-line text inputs |
| `Label` | Form labels |

### Layout Components

| Component | Description |
|-----------|-------------|
| `Container` | Responsive container with size variants |
| `Section` | Page sections with gradient backgrounds |
| `Heading` | Typography headings with gradient support |
| `Separator` | Horizontal/vertical dividers |

### Specialized Components

| Component | Description |
|-----------|-------------|
| `GlassCard` | Glassmorphism cards with blur effects |
| `AnimatedCard` | Cards with hover animations (lift, glow, tilt) |
| `Skeleton` | Loading skeletons with shimmer effect |
| `Avatar` | User avatars with fallbacks |

### Overlays

| Component | Description |
|-----------|-------------|
| `Dialog` | Modal dialogs |
| `Tooltip` | Hover tooltips |
| `Toast` | Toast notifications |
| `Tabs` | Tabbed interfaces |

## Design Tokens

### Colors

The color palette uses HSL CSS variables for easy theming:

- `--primary` - Teal green (152°) for primary actions
- `--secondary` - Muted teal for secondary elements
- `--accent` - Warm cream for accents
- `--success/warning/info` - Status colors with muted variants

### Neumorphic Classes

Use these utility classes for neumorphic effects:

```tsx
<div className="neu-flat">Raised neumorphic element</div>
<div className="neu-convex">Convex neumorphic element</div>
<div className="neu-concave">Concave/pressed element</div>
```

### Glass Classes

```tsx
<div className="glass">Basic glass effect</div>
<div className="glass-card">Glass card with shadow</div>
```

### Glow Classes

```tsx
<div className="glow-primary">Primary color glow</div>
<div className="glow-secondary">Secondary color glow</div>
```

## Hooks

```tsx
import { useIsMobile, usePrefersDarkMode, usePrefersReducedMotion } from "@vivancedata/ui";

function MyComponent() {
  const isMobile = useIsMobile();
  const prefersDark = usePrefersDarkMode();
  const reducedMotion = usePrefersReducedMotion();
  
  // ...
}
```

## Customization

Override CSS variables in your `globals.css`:

```css
:root {
  --primary: 200 80% 50%; /* Custom blue primary */
  --radius: 0.5rem; /* Smaller border radius */
}
```

## License

MIT © Vivancedata
