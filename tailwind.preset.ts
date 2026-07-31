import type { Config } from "tailwindcss";

/**
 * The Vivancedata Tailwind preset. Consumed by every app in the fleet via
 * `presets: [require("@vivancedata/ui/tailwind")]`.
 *
 * The token contract is documented in DESIGN.md at the package root; the
 * corresponding CSS custom properties live in src/styles/globals.css.
 */
const vivanceTailwindPreset: Partial<Config> = {
  darkMode: ["class"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Geist Sans and Geist Mono, loaded per-app via next/font and exposed
        // as CSS variables. The fallbacks match Geist's own metrics guidance.
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },

      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "64px",
        "4xl": "96px",
        section: "128px",
      },

      borderRadius: {
        // Bimodal by design: tight squares for functional chrome, full pills
        // for marketing CTAs, 12-16px on content cards in between.
        sm: "6px",
        md: "12px",
        lg: "16px",
        // Retuned from 24px/32px toward the Geist scale. This sharpens ~135
        // existing `rounded-xl` / `rounded-2xl` call sites without editing them.
        xl: "16px",
        "2xl": "20px",
        "pill-category": "64px",
        pill: "100px",
      },

      fontSize: {
        // Display tracking is negative and expressed in em so it scales with
        // the type instead of crushing small renderings. Sizes use clamp()
        // because the source spec's fixed 48px was sampled at a narrow
        // viewport and would have shrunk the existing desktop hero.
        "display-xl": [
          "clamp(3rem, 6vw, 4.75rem)",
          { lineHeight: "1.02", letterSpacing: "-0.05em", fontWeight: "600" },
        ],
        display: [
          "clamp(2.5rem, 4.5vw, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.045em", fontWeight: "600" },
        ],
        "heading-1": [
          "2rem",
          { lineHeight: "1.2", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
        "heading-2": [
          "1.5rem",
          { lineHeight: "1.25", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        "heading-3": [
          "1.25rem",
          { lineHeight: "1.4", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-4": [
          "1.125rem",
          { lineHeight: "1.45", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        // Geist Mono section eyebrow. Positive tracking -- uppercase mono at
        // 12px sets too tight without it.
        eyebrow: [
          "0.75rem",
          { lineHeight: "1.333", letterSpacing: "0.02em", fontWeight: "500" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.5" }],
        "body-sm": ["0.875rem", { lineHeight: "1.43" }],
        caption: ["0.75rem", { lineHeight: "1.333" }],
        code: ["0.875rem", { lineHeight: "1.43" }],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // The brand green. Links, focus, eyebrows, the hero mesh -- never a
        // large chrome fill, and never swapped into `accent`.
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        // Decorative grey tiers. Below 4.5:1 against the canvas -- metadata
        // and placeholders only. See DESIGN.md.
        mute: "hsl(var(--mute))",
        faint: "hsl(var(--faint))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          muted: "hsl(var(--success-muted))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          muted: "hsl(var(--warning-muted))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
          muted: "hsl(var(--info-muted))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      boxShadow: {
        // Depth is a 1px hairline first. These are the only two steps above
        // flat, and level 2 is the ceiling.
        1: "var(--shadow-1)",
        2: "var(--shadow-2)",
        // Kept as aliases so existing `shadow-elevation-*` call sites resolve
        // to the new scale rather than breaking. elevation-3 collapses into 2
        // deliberately -- the system has no third step.
        "elevation-1": "var(--shadow-1)",
        "elevation-2": "var(--shadow-2)",
        "elevation-3": "var(--shadow-2)",
      },

      transitionDuration: {
        fast: "var(--duration-fast)",
        DEFAULT: "var(--duration-default)",
        slow: "var(--duration-slow)",
      },

      zIndex: {
        dropdown: "var(--z-dropdown)",
        sticky: "var(--z-sticky)",
        fixed: "var(--z-fixed)",
        "modal-backdrop": "var(--z-modal-backdrop)",
        modal: "var(--z-modal)",
        popover: "var(--z-popover)",
        tooltip: "var(--z-tooltip)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "scale-in": {
          from: { transform: "scale(0.98)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "slide-in-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-bottom": "slide-in-from-bottom 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default vivanceTailwindPreset;
