// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
}
function formatRelativeTime(date, locale = "en-US") {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const now = /* @__PURE__ */ new Date();
  const diffInSeconds = Math.floor((date.getTime() - now.getTime()) / 1e3);
  const units = [
    { unit: "year", seconds: 31536e3 },
    { unit: "month", seconds: 2592e3 },
    { unit: "week", seconds: 604800 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 }
  ];
  for (const { unit, seconds } of units) {
    if (Math.abs(diffInSeconds) >= seconds) {
      return rtf.format(Math.round(diffInSeconds / seconds), unit);
    }
  }
  return rtf.format(0, "second");
}
function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
function debounce(func, wait) {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
var isClient = typeof window !== "undefined";
var isServer = !isClient;

// src/lib/animations.ts
var ANIMATION_DURATION = 0.4;
var EASE_OUT_EXPO = [0.6, -0.05, 0.01, 0.99];
var fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, ease: EASE_OUT_EXPO } }
};
var fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: ANIMATION_DURATION, ease: "easeInOut" } }
};
var scaleUp = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: ANIMATION_DURATION, ease: EASE_OUT_EXPO } }
};
var slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, ease: "easeOut" } }
};
var fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: ANIMATION_DURATION, ease: "easeOut" } }
};
var slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: ANIMATION_DURATION, ease: "easeOut" } }
};
var slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: ANIMATION_DURATION, ease: "easeOut" } }
};
var stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};
var staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};
var staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: ANIMATION_DURATION, ease: "easeOut" } }
};
var staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};
var staggerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: ANIMATION_DURATION } }
};
var showContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};
var showItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: ANIMATION_DURATION } }
};
var showItemSpringVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};
var photoReveal = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 150, damping: 20 } }
};
var iconPop = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.4 + i * 0.08 }
  })
};
var parallaxScroll = (yOffset = 100) => ({
  initial: { y: 0 },
  animate: { y: yOffset, transition: { type: "spring", stiffness: 10, damping: 100, mass: 1 } }
});
var springGentle = { type: "spring", stiffness: 100, damping: 15 };
var springSnappy = { type: "spring", stiffness: 200, damping: 20 };
var springBouncy = { type: "spring", stiffness: 300, damping: 10 };

// src/hooks/use-media-query.ts
import { useState, useEffect } from "react";
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (event) => {
      setMatches(event.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}
function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}
function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}
function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
function usePrefersDarkMode() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}
function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

// src/hooks/use-is-client.ts
import { useSyncExternalStore } from "react";
var emptySubscribe = () => () => {
};
var getSnapshot = () => true;
var getServerSnapshot = () => false;
function useIsClient() {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}

// src/components/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
        ghost: "hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline",
        // Neumorphic variants
        neu: "neu-flat bg-background text-foreground hover:shadow-neu-lg active:shadow-neu-inset",
        "neu-primary": "neu-flat bg-primary text-primary-foreground hover:shadow-neu-lg active:shadow-neu-inset",
        // Glass variant
        glass: "glass text-foreground hover:bg-[var(--glass-bg)] active:scale-[0.98]",
        // Glow variants
        glow: "bg-primary text-primary-foreground glow-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] active:scale-[0.98]",
        // CTA primary variant
        primary: "cta-primary"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, isLoading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: disabled || isLoading,
        ...props,
        children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "mr-2 h-4 w-4 animate-spin",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          "Loading..."
        ] }) : children
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card.tsx
import * as React2 from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var cardVariants = cva2(
  "rounded-lg border text-card-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-card shadow-sm",
        outline: "bg-transparent border-border",
        ghost: "border-transparent bg-transparent",
        // Neumorphic variants
        neu: "neu-flat border-transparent",
        "neu-inset": "neu-concave border-transparent",
        // Glass variant
        glass: "glass border-[var(--glass-border)]",
        // Elevated with glow on hover
        elevated: "bg-card shadow-md hover:shadow-lg hover:-translate-y-1"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Card = React2.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx2(
    "div",
    {
      ref,
      className: cn(cardVariants({ variant, className })),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var badgeVariants = cva3(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Status variants
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        // Muted status variants (softer backgrounds)
        "success-muted": "border-transparent bg-[hsl(var(--success-muted))] text-success",
        "warning-muted": "border-transparent bg-[hsl(var(--warning-muted))] text-warning",
        "info-muted": "border-transparent bg-[hsl(var(--info-muted))] text-info",
        // Glass variant
        glass: "glass border-[var(--glass-border)] text-foreground",
        // Neumorphic
        neu: "border-transparent shadow-neu-sm bg-background text-foreground"
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Badge({ className, variant, size, icon, children, ...props }) {
  return /* @__PURE__ */ jsxs2("div", { className: cn(badgeVariants({ variant, size }), className), ...props, children: [
    icon && /* @__PURE__ */ jsx3("span", { className: "mr-1", children: icon }),
    children
  ] });
}

// src/components/input.tsx
import * as React3 from "react";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var inputVariants = cva4(
  "flex w-full rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border border-input bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "border-0 bg-transparent focus-visible:bg-accent",
        // Neumorphic variants
        neu: "border-0 shadow-neu-inset-sm bg-background focus-visible:shadow-neu-inset",
        // Glass variant
        glass: "glass border-[var(--glass-border)] focus-visible:ring-2 focus-visible:ring-ring"
      },
      inputSize: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default"
    }
  }
);
var Input = React3.forwardRef(
  ({ className, type, variant, inputSize, startIcon, endIcon, ...props }, ref) => {
    if (startIcon || endIcon) {
      return /* @__PURE__ */ jsxs3("div", { className: "relative flex items-center", children: [
        startIcon && /* @__PURE__ */ jsx4("div", { className: "absolute left-3 flex items-center text-muted-foreground", children: startIcon }),
        /* @__PURE__ */ jsx4(
          "input",
          {
            type,
            className: cn(
              inputVariants({ variant, inputSize }),
              startIcon && "pl-10",
              endIcon && "pr-10",
              className
            ),
            ref,
            ...props
          }
        ),
        endIcon && /* @__PURE__ */ jsx4("div", { className: "absolute right-3 flex items-center text-muted-foreground", children: endIcon })
      ] });
    }
    return /* @__PURE__ */ jsx4(
      "input",
      {
        type,
        className: cn(inputVariants({ variant, inputSize, className })),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/textarea.tsx
import * as React4 from "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx5 } from "react/jsx-runtime";
var textareaVariants = cva5(
  "flex min-h-[80px] w-full rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
  {
    variants: {
      variant: {
        default: "border border-input bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "border-0 bg-transparent focus-visible:bg-accent",
        neu: "border-0 shadow-neu-inset-sm bg-background focus-visible:shadow-neu-inset",
        glass: "glass border-[var(--glass-border)] focus-visible:ring-2 focus-visible:ring-ring"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Textarea = React4.forwardRef(
  ({ className, variant, ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "textarea",
      {
        className: cn(textareaVariants({ variant }), "px-3 py-2", className),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/label.tsx
import * as React5 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx6 } from "react/jsx-runtime";
var labelVariants = cva6(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        error: "text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Label = React5.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx6(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants({ variant }), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/glass-card.tsx
import * as React6 from "react";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var glassCardVariants = cva7(
  "rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "glass",
        frosted: "glass backdrop-blur-xl",
        tinted: "glass bg-primary/5 dark:bg-primary/10",
        bordered: "glass border-2 border-primary/20"
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-2 hover:shadow-lg",
        glow: "hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]",
        scale: "hover:scale-[1.02]"
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
      padding: "default"
    }
  }
);
var GlassCard = React6.forwardRef(
  ({ className, variant, hover, padding, gradient, children, ...props }, ref) => /* @__PURE__ */ jsx7(
    "div",
    {
      ref,
      className: cn(
        glassCardVariants({ variant, hover, padding }),
        gradient && "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none relative overflow-hidden",
        className
      ),
      ...props,
      children
    }
  )
);
GlassCard.displayName = "GlassCard";

// src/components/animated-card.tsx
import * as React7 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var AnimatedCard = React7.forwardRef(
  ({ className, variant = "hover-lift", background = "default", children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React7.useState({ x: 0, y: 0 });
    const cardRef = React7.useRef(null);
    const handleMouseMove = (e) => {
      if (!cardRef.current || variant !== "hover-tilt") return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };
    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };
    const tiltStyle = variant === "hover-tilt" ? {
      transform: `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg)`,
      transition: "transform 0.1s ease-out"
    } : {};
    return /* @__PURE__ */ jsx8(
      "div",
      {
        ref: (node) => {
          cardRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        className: cn(
          "rounded-lg p-6 transition-all duration-300",
          // Background variants
          background === "default" && "bg-card border",
          background === "glass" && "glass",
          background === "neu" && "neu-flat",
          // Animation variants
          variant === "hover-lift" && "hover:-translate-y-2 hover:shadow-lg",
          variant === "hover-glow" && "hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
          variant === "hover-border" && "border-transparent hover:border-primary",
          className
        ),
        style: tiltStyle,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        ...props,
        children
      }
    );
  }
);
AnimatedCard.displayName = "AnimatedCard";

// src/components/skeleton.tsx
import * as React8 from "react";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var skeletonVariants = cva8("animate-pulse rounded-md bg-muted", {
  variants: {
    variant: {
      default: "bg-muted",
      shimmer: "shimmer",
      neu: "shadow-neu-inset-sm bg-background"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Skeleton = React8.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx9(
    "div",
    {
      ref,
      className: cn(skeletonVariants({ variant }), className),
      ...props
    }
  )
);
Skeleton.displayName = "Skeleton";
var SkeletonText = React8.forwardRef(({ className, lines = 3, variant, ...props }, ref) => /* @__PURE__ */ jsx9("div", { ref, className: cn("space-y-2", className), ...props, children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx9(
  Skeleton,
  {
    variant,
    className: cn("h-4", i === lines - 1 && "w-4/5")
  },
  i
)) }));
SkeletonText.displayName = "SkeletonText";
var SkeletonCard = React8.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxs4(
    "div",
    {
      ref,
      className: cn("rounded-lg border p-4 space-y-4", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx9(Skeleton, { variant, className: "h-32 w-full" }),
        /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx9(Skeleton, { variant, className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsx9(Skeleton, { variant, className: "h-4 w-1/2" })
        ] })
      ]
    }
  )
);
SkeletonCard.displayName = "SkeletonCard";
var SkeletonAvatar = React8.forwardRef(({ className, size = "default", variant, ...props }, ref) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-14 w-14"
  };
  return /* @__PURE__ */ jsx9(
    Skeleton,
    {
      ref,
      variant,
      className: cn("rounded-full", sizeClasses[size], className),
      ...props
    }
  );
});
SkeletonAvatar.displayName = "SkeletonAvatar";

// src/components/avatar.tsx
import * as React9 from "react";
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx10 } from "react/jsx-runtime";
var avatarVariants = cva9(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-14 w-14",
        xl: "h-20 w-20"
      },
      variant: {
        default: "bg-muted",
        neu: "shadow-neu-sm bg-background",
        ring: "ring-2 ring-primary ring-offset-2 ring-offset-background"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
);
var Avatar = React9.forwardRef(
  ({ className, size, variant, ...props }, ref) => /* @__PURE__ */ jsx10(
    "div",
    {
      ref,
      className: cn(avatarVariants({ size, variant }), className),
      ...props
    }
  )
);
Avatar.displayName = "Avatar";
var AvatarImage = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  "img",
  {
    ref,
    className: cn("aspect-square h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  "div",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";

// src/components/separator.tsx
import * as React10 from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Separator = React10.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx11(
    "div",
    {
      ref,
      role: decorative ? "none" : "separator",
      "aria-orientation": decorative ? void 0 : orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = "Separator";

// src/components/section.tsx
import * as React11 from "react";
import { cva as cva10 } from "class-variance-authority";
import { jsx as jsx12 } from "react/jsx-runtime";
var sectionVariants = cva10("w-full", {
  variants: {
    variant: {
      default: "",
      gradient: "gradient-vivance",
      muted: "bg-muted/50",
      card: "bg-card rounded-lg border",
      glass: "glass rounded-lg"
    },
    padding: {
      none: "",
      sm: "py-8 md:py-12",
      default: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-24 md:py-32"
    },
    container: {
      none: "",
      default: "[&>*]:mx-auto [&>*]:max-w-7xl [&>*]:px-4 sm:[&>*]:px-6 lg:[&>*]:px-8",
      narrow: "[&>*]:mx-auto [&>*]:max-w-4xl [&>*]:px-4 sm:[&>*]:px-6 lg:[&>*]:px-8",
      wide: "[&>*]:mx-auto [&>*]:max-w-screen-2xl [&>*]:px-4 sm:[&>*]:px-6 lg:[&>*]:px-8"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
    container: "default"
  }
});
var Section = React11.forwardRef(
  ({ className, variant, padding, container, as: Component2 = "section", ...props }, ref) => /* @__PURE__ */ jsx12(
    Component2,
    {
      ref,
      className: cn(sectionVariants({ variant, padding, container }), className),
      ...props
    }
  )
);
Section.displayName = "Section";

// src/components/heading.tsx
import * as React12 from "react";
import { cva as cva11 } from "class-variance-authority";
import { jsx as jsx13 } from "react/jsx-runtime";
var headingVariants = cva11("font-bold tracking-tight text-balance", {
  variants: {
    level: {
      display: "text-display",
      h1: "text-heading-1",
      h2: "text-heading-2",
      h3: "text-heading-3",
      h4: "text-heading-4"
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      gradient: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
    }
  },
  defaultVariants: {
    level: "h1",
    variant: "default"
  }
});
var Heading = React12.forwardRef(
  ({ className, level, variant, as, children, ...props }, ref) => {
    const Component2 = as || (level === "display" ? "h1" : level || "h1");
    return /* @__PURE__ */ jsx13(
      Component2,
      {
        ref,
        className: cn(headingVariants({ level, variant }), className),
        ...props,
        children
      }
    );
  }
);
Heading.displayName = "Heading";

// src/components/container.tsx
import * as React13 from "react";
import { cva as cva12 } from "class-variance-authority";
import { jsx as jsx14 } from "react/jsx-runtime";
var containerVariants = cva12("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-3xl",
      default: "max-w-7xl",
      lg: "max-w-screen-xl",
      xl: "max-w-screen-2xl",
      full: "max-w-full"
    },
    padding: {
      none: "",
      default: "px-4 sm:px-6 lg:px-8",
      tight: "px-2 sm:px-4",
      loose: "px-6 sm:px-8 lg:px-12"
    }
  },
  defaultVariants: {
    size: "default",
    padding: "default"
  }
});
var Container = React13.forwardRef(
  ({ className, size, padding, ...props }, ref) => /* @__PURE__ */ jsx14(
    "div",
    {
      ref,
      className: cn(containerVariants({ size, padding }), className),
      ...props
    }
  )
);
Container.displayName = "Container";

// src/components/accordion.tsx
import * as React14 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { jsx as jsx15, jsxs as jsxs5 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx15(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs5(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx15(
        "svg",
        {
          className: "h-4 w-4 shrink-0 transition-transform duration-200",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /* @__PURE__ */ jsx15("path", { d: "m6 9 6 6 6-6" })
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx15(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx15("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = "AccordionContent";

// src/components/checkbox.tsx
import * as React15 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { jsx as jsx16 } from "react/jsx-runtime";
var Checkbox = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx16(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx16("svg", { className: "h-4 w-4", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx16("path", { d: "M20 6 9 17l-5-5" }) }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/switch.tsx
import * as React16 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { jsx as jsx17 } from "react/jsx-runtime";
var Switch = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx17(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/dialog.tsx
import * as React17 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { jsx as jsx18, jsxs as jsxs6 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-modal-backdrop bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React17.forwardRef(({ className, children, variant = "default", ...props }, ref) => /* @__PURE__ */ jsxs6(DialogPortal, { children: [
  /* @__PURE__ */ jsx18(DialogOverlay, {}),
  /* @__PURE__ */ jsxs6(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-modal grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-out",
        variant === "default" && "border bg-background",
        variant === "glass" && "glass-card",
        variant === "neu" && "neu-flat border-0",
        "rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs6(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxs6(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "h-4 w-4",
              children: [
                /* @__PURE__ */ jsx18("path", { d: "M18 6 6 18" }),
                /* @__PURE__ */ jsx18("path", { d: "m6 6 12 12" })
              ]
            }
          ),
          /* @__PURE__ */ jsx18("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx18(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx18(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/tooltip.tsx
import * as React18 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx19 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React18.forwardRef(({ className, sideOffset = 4, variant = "default", ...props }, ref) => /* @__PURE__ */ jsx19(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-tooltip overflow-hidden rounded-md px-3 py-1.5 text-sm animate-fade-in",
      variant === "default" && "border bg-popover text-popover-foreground shadow-md",
      variant === "glass" && "glass text-foreground",
      variant === "neu" && "shadow-neu-sm bg-background text-foreground",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/toast.tsx
import * as React19 from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva13 } from "class-variance-authority";
import { jsx as jsx20, jsxs as jsxs7 } from "react/jsx-runtime";
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-tooltip flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva13(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-slide-in-bottom data-[state=closed]:animate-fade-out",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border-success bg-success text-success-foreground",
        warning: "border-warning bg-warning text-warning-foreground",
        info: "border-info bg-info text-info-foreground",
        glass: "glass text-foreground",
        neu: "shadow-neu bg-background text-foreground border-0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React19.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx20(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxs7(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "h-4 w-4",
        children: [
          /* @__PURE__ */ jsx20("path", { d: "M18 6 6 18" }),
          /* @__PURE__ */ jsx20("path", { d: "m6 6 12 12" })
        ]
      }
    )
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/components/tabs.tsx
import * as React20 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva as cva14 } from "class-variance-authority";
import { jsx as jsx21 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var tabsListVariants = cva14(
  "inline-flex items-center justify-center rounded-md p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-muted",
        ghost: "bg-transparent gap-2",
        neu: "shadow-neu-inset bg-background",
        glass: "glass",
        underline: "bg-transparent gap-4 p-0 rounded-none border-b"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsList = React20.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx21(
  TabsPrimitive.List,
  {
    ref,
    className: cn(tabsListVariants({ variant }), className),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var tabsTriggerVariants = cva14(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        ghost: "rounded-md hover:bg-muted data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",
        neu: "rounded-md data-[state=active]:shadow-neu-sm data-[state=active]:bg-background data-[state=active]:text-foreground",
        glass: "rounded-md data-[state=active]:bg-white/20 data-[state=active]:text-foreground",
        underline: "rounded-none border-b-2 border-transparent pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsTrigger = React20.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx21(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(tabsTriggerVariants({ variant }), className),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:animate-fade-in",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/magnetic-button.tsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef as useRef2, useState as useState3 } from "react";
import { jsx as jsx22, jsxs as jsxs8 } from "react/jsx-runtime";
function MagneticButton({
  children,
  className = "",
  strength = 0.5,
  as: Component2 = "button",
  onClick,
  href
}) {
  const ref = useRef2(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const MotionComponent = motion[Component2];
  return /* @__PURE__ */ jsx22(
    MotionComponent,
    {
      ref,
      className,
      style: { x: springX, y: springY },
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick,
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      ...href && { href },
      children
    }
  );
}
function RippleButton({ children, className = "", onClick, disabled = false }) {
  const ref = useRef2(null);
  const [ripples, setRipples] = useState3([]);
  const handleClick = (e) => {
    if (disabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const newRipple = { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)), 600);
    onClick?.();
  };
  return /* @__PURE__ */ jsxs8(motion.button, { ref, type: "button", className: `relative overflow-hidden ${className}`, onClick: handleClick, disabled, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [
    ripples.map((ripple) => /* @__PURE__ */ jsx22(motion.span, { className: "absolute rounded-full bg-white/30 pointer-events-none", style: { left: ripple.x, top: ripple.y, transform: "translate(-50%, -50%)" }, initial: { scale: 0, opacity: 0.5 }, animate: { scale: 4, opacity: 0 }, transition: { duration: 0.6, ease: "easeOut" } }, ripple.id)),
    children
  ] });
}
function GlowButton({ children, className = "", glowColor = "rgba(124, 58, 237, 0.5)", onClick }) {
  const [position, setPosition] = useState3({ x: 0, y: 0 });
  const ref = useRef2(null);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return /* @__PURE__ */ jsxs8(motion.button, { ref, type: "button", className: `relative overflow-hidden ${className}`, onMouseMove: handleMouseMove, onClick, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [
    /* @__PURE__ */ jsx22(motion.div, { className: "absolute pointer-events-none rounded-full blur-xl", style: { width: 150, height: 150, left: position.x - 75, top: position.y - 75, background: glowColor }, initial: { opacity: 0 }, whileHover: { opacity: 1 }, transition: { duration: 0.2 } }),
    /* @__PURE__ */ jsx22("span", { className: "relative z-10", children })
  ] });
}
function BorderBeamButton({ children, className = "", borderColor = "hsl(var(--primary))", onClick }) {
  return /* @__PURE__ */ jsxs8(motion.button, { type: "button", className: `relative group ${className}`, onClick, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [
    /* @__PURE__ */ jsx22("span", { className: "absolute inset-0 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx22(motion.span, { className: "absolute inset-[-100%] rounded-xl", style: { background: `conic-gradient(from 0deg, transparent 0deg, ${borderColor} 60deg, transparent 120deg)` }, animate: { rotate: 360 }, transition: { duration: 3, ease: "linear", repeat: Infinity } }) }),
    /* @__PURE__ */ jsx22("span", { className: "relative block m-[2px] rounded-[10px] bg-background px-6 py-3", children })
  ] });
}

// src/components/cursor-glow.tsx
import { useEffect as useEffect2, useState as useState4 } from "react";
import { motion as motion2, useMotionValue as useMotionValue2, useSpring as useSpring2 } from "framer-motion";
import { jsx as jsx23, jsxs as jsxs9 } from "react/jsx-runtime";
function checkIsMobile() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(hover: none)").matches;
}
function checkPrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CursorGlow({
  size = 600,
  opacity = 0.15,
  color = "hsl(var(--primary))",
  containerRef,
  className = "",
  zIndex = 0
}) {
  const isClient2 = useIsClient();
  const [isVisible, setIsVisible] = useState4(false);
  const mouseX = useMotionValue2(0);
  const mouseY = useMotionValue2(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring2(mouseX, springConfig);
  const springY = useSpring2(mouseY, springConfig);
  const isMobile = !isClient2 || checkIsMobile();
  const prefersReducedMotion = isClient2 && checkPrefersReducedMotion();
  useEffect2(() => {
    if (isMobile || prefersReducedMotion) return;
    const container = containerRef?.current;
    const handleMouseMove = (e) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
        setIsVisible(isInside);
        if (isInside) {
          mouseX.set(x);
          mouseY.set(y);
        }
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsVisible(true);
      }
    };
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      if (!container) {
        setIsVisible(true);
      }
    };
    const target = container || document;
    target.addEventListener("mousemove", handleMouseMove);
    if (container) {
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseenter", handleMouseEnter);
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }
    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseenter", handleMouseEnter);
      } else {
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [isMobile, prefersReducedMotion, mouseX, mouseY, containerRef]);
  if (isMobile || prefersReducedMotion) return null;
  const isScoped = !!containerRef;
  return /* @__PURE__ */ jsx23(
    motion2.div,
    {
      className: `pointer-events-none ${isScoped ? "absolute" : "fixed"} inset-0 overflow-hidden ${className}`,
      style: { zIndex },
      initial: { opacity: 0 },
      animate: { opacity: isVisible ? 1 : 0 },
      transition: { duration: 0.3 },
      children: /* @__PURE__ */ jsx23(
        motion2.div,
        {
          className: "absolute rounded-full",
          style: {
            width: size,
            height: size,
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
            opacity
          }
        }
      )
    }
  );
}
function GradientCursorGlow({
  size = 800,
  opacity = 0.12,
  primaryColor = "rgba(100, 200, 100, 0.4)",
  secondaryColor = "rgba(59, 130, 246, 0.2)",
  containerRef,
  zIndex = 0
}) {
  const isClient2 = useIsClient();
  const [isVisible, setIsVisible] = useState4(false);
  const mouseX = useMotionValue2(0);
  const mouseY = useMotionValue2(0);
  const springConfig = { damping: 30, stiffness: 120, mass: 0.8 };
  const springX = useSpring2(mouseX, springConfig);
  const springY = useSpring2(mouseY, springConfig);
  const isMobile = !isClient2 || checkIsMobile();
  const prefersReducedMotion = isClient2 && checkPrefersReducedMotion();
  useEffect2(() => {
    if (isMobile || prefersReducedMotion) return;
    const container = containerRef?.current;
    const handleMouseMove = (e) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
        setIsVisible(isInside);
        if (isInside) {
          mouseX.set(x);
          mouseY.set(y);
        }
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsVisible(true);
      }
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (!container) setIsVisible(true);
    };
    const target = container || document;
    target.addEventListener("mousemove", handleMouseMove);
    if (container) {
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseenter", handleMouseEnter);
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }
    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseenter", handleMouseEnter);
      } else {
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [isMobile, prefersReducedMotion, mouseX, mouseY, containerRef]);
  if (isMobile || prefersReducedMotion) return null;
  const isScoped = !!containerRef;
  return /* @__PURE__ */ jsxs9(
    motion2.div,
    {
      className: `pointer-events-none ${isScoped ? "absolute" : "fixed"} inset-0 overflow-hidden`,
      style: { zIndex },
      initial: { opacity: 0 },
      animate: { opacity: isVisible ? 1 : 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsx23(
          motion2.div,
          {
            className: "absolute rounded-full blur-3xl",
            style: {
              width: size,
              height: size,
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
              background: `radial-gradient(circle at center, ${primaryColor} 0%, transparent 60%)`,
              opacity
            }
          }
        ),
        /* @__PURE__ */ jsx23(
          motion2.div,
          {
            className: "absolute rounded-full blur-3xl",
            style: {
              width: size * 0.7,
              height: size * 0.7,
              x: springX,
              y: springY,
              translateX: "-30%",
              translateY: "-30%",
              background: `radial-gradient(circle at center, ${secondaryColor} 0%, transparent 60%)`,
              opacity: opacity * 0.8
            }
          }
        )
      ]
    }
  );
}

// src/components/cursor-follower.tsx
import { motion as motion3, useMotionValue as useMotionValue3, useSpring as useSpring3 } from "framer-motion";
import { useEffect as useEffect3, useState as useState5 } from "react";
import { Fragment as Fragment2, jsx as jsx24 } from "react/jsx-runtime";
function checkIsMobile2() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(hover: none)").matches;
}
function CursorFollower({
  size = 20,
  color = "hsl(var(--primary))",
  mixBlendMode = "difference"
}) {
  const isClient2 = useIsClient();
  const [isVisible, setIsVisible] = useState5(false);
  const [isHovering, setIsHovering] = useState5(false);
  const cursorX = useMotionValue3(-100);
  const cursorY = useMotionValue3(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring3(cursorX, springConfig);
  const springY = useSpring3(cursorY, springConfig);
  const isMobile = !isClient2 || checkIsMobile2();
  useEffect3(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
      setIsVisible(true);
    };
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button") || target.closest("[role='button']") || target.dataset.cursorHover === "true";
      setIsHovering(!!isInteractive);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleElementHover);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [cursorX, cursorY, size, isMobile]);
  if (isMobile) return null;
  return /* @__PURE__ */ jsx24(
    motion3.div,
    {
      className: "fixed top-0 left-0 pointer-events-none z-[9999] rounded-full",
      style: {
        x: springX,
        y: springY,
        width: size,
        height: size,
        backgroundColor: color,
        mixBlendMode
      },
      animate: {
        scale: isHovering ? 2.5 : 1,
        opacity: isVisible ? 1 : 0
      },
      transition: {
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 }
      }
    }
  );
}
function SpotlightCursor({
  size = 400,
  opacity = 0.15,
  color = "hsl(var(--primary))"
}) {
  const isClient2 = useIsClient();
  const cursorX = useMotionValue3(-1e3);
  const cursorY = useMotionValue3(-1e3);
  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring3(cursorX, springConfig);
  const springY = useSpring3(cursorY, springConfig);
  const isMobile = !isClient2 || checkIsMobile2();
  useEffect3(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY, size, isMobile]);
  if (isMobile) return null;
  return /* @__PURE__ */ jsx24(
    motion3.div,
    {
      className: "fixed top-0 left-0 pointer-events-none z-[1] rounded-full blur-3xl",
      style: {
        x: springX,
        y: springY,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity
      }
    }
  );
}
function TrailCursor({
  dotCount = 8,
  dotSize = 10,
  color = "hsl(var(--primary))"
}) {
  const isClient2 = useIsClient();
  const [mousePosition, setMousePosition] = useState5({ x: -100, y: -100 });
  const [trail, setTrail] = useState5(
    Array(dotCount).fill({ x: -100, y: -100 })
  );
  const isMobile = !isClient2 || checkIsMobile2();
  useEffect3(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);
  useEffect3(() => {
    let rafId;
    const animateTrail = () => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail];
        newTrail[0] = mousePosition;
        for (let i = 1; i < newTrail.length; i++) {
          const dx = newTrail[i - 1].x - newTrail[i].x;
          const dy = newTrail[i - 1].y - newTrail[i].y;
          newTrail[i] = {
            x: newTrail[i].x + dx * 0.35,
            y: newTrail[i].y + dy * 0.35
          };
        }
        return newTrail;
      });
    };
    const animate = () => {
      animateTrail();
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [mousePosition]);
  if (isMobile) return null;
  return /* @__PURE__ */ jsx24(Fragment2, { children: trail.map((dot, index) => /* @__PURE__ */ jsx24(
    "div",
    {
      className: "fixed top-0 left-0 pointer-events-none z-[9999] rounded-full",
      style: {
        transform: `translate(${dot.x - dotSize / 2}px, ${dot.y - dotSize / 2}px)`,
        width: dotSize * (1 - index * 0.1),
        height: dotSize * (1 - index * 0.1),
        backgroundColor: color,
        opacity: 1 - index * 0.12,
        mixBlendMode: "difference"
      }
    },
    index
  )) });
}

// src/components/glow-section.tsx
import { useRef as useRef3 } from "react";
import { jsx as jsx25, jsxs as jsxs10 } from "react/jsx-runtime";
function GlowSection({
  children,
  className = "",
  variant = "default",
  size,
  opacity,
  color,
  primaryColor,
  secondaryColor,
  enabled = true,
  as: Component2 = "section"
}) {
  const containerRef = useRef3(null);
  return /* @__PURE__ */ jsxs10(Component2, { className: `relative ${className}`, children: [
    /* @__PURE__ */ jsxs10("div", { ref: containerRef, className: "absolute inset-0 pointer-events-none", "aria-hidden": "true", children: [
      enabled && variant === "default" && /* @__PURE__ */ jsx25(
        CursorGlow,
        {
          containerRef,
          size,
          opacity,
          color
        }
      ),
      enabled && variant === "gradient" && /* @__PURE__ */ jsx25(
        GradientCursorGlow,
        {
          containerRef,
          size,
          opacity,
          primaryColor,
          secondaryColor
        }
      )
    ] }),
    children
  ] });
}
function HeroGlowSection({ children, className = "" }) {
  return /* @__PURE__ */ jsx25(
    GlowSection,
    {
      className,
      variant: "default",
      size: 700,
      opacity: 0.18,
      color: "hsl(var(--primary))",
      children
    }
  );
}
function SubtleGlowSection({ children, className = "" }) {
  return /* @__PURE__ */ jsx25(
    GlowSection,
    {
      className,
      variant: "default",
      size: 500,
      opacity: 0.1,
      color: "hsl(var(--primary))",
      children
    }
  );
}

// src/components/animated-text.tsx
import { motion as motion4, useInView } from "framer-motion";
import { useRef as useRef4 } from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var charVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0
  }
};
function AnimatedHeading({
  children,
  as: Component2 = "h2",
  className = "",
  once = true,
  staggerDelay = 0.03
}) {
  const ref = useRef4(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const characters = children.split("");
  return /* @__PURE__ */ jsx26(Component2, { ref, className, children: /* @__PURE__ */ jsx26(
    motion4.span,
    {
      className: "inline-flex flex-wrap",
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      transition: { staggerChildren: staggerDelay },
      children: characters.map((char, index) => /* @__PURE__ */ jsx26(
        motion4.span,
        {
          className: "inline-block",
          variants: charVariants,
          transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          },
          style: {
            perspective: 1e3,
            whiteSpace: char === " " ? "pre" : "normal"
          },
          children: char === " " ? "\xA0" : char
        },
        `${char}-${index}`
      ))
    }
  ) });
}
function GradientText({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx26(
    motion4.span,
    {
      className: `inline-block text-primary font-bold ${className}`,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      },
      children
    }
  );
}

// src/components/floating-elements.tsx
import { motion as motion5 } from "framer-motion";
import { useMemo } from "react";
import { jsx as jsx27, jsxs as jsxs11 } from "react/jsx-runtime";
function seededRandom(seed) {
  const x = Math.sin(seed * 9999) * 1e4;
  return x - Math.floor(x);
}
function FloatingElement({
  children,
  className = "",
  duration = 3,
  distance = 10,
  delay = 0
}) {
  return /* @__PURE__ */ jsx27(
    motion5.div,
    {
      className,
      animate: { y: [0, -distance, 0] },
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      },
      children
    }
  );
}
function RotatingElement({
  children,
  className = "",
  duration = 10,
  direction = "cw"
}) {
  const rotation = direction === "cw" ? 360 : -360;
  return /* @__PURE__ */ jsx27(
    motion5.div,
    {
      className,
      animate: { rotate: rotation },
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear"
      },
      children
    }
  );
}
function PulsingElement({
  children,
  className = "",
  duration = 2,
  scale = 1.05
}) {
  return /* @__PURE__ */ jsx27(
    motion5.div,
    {
      className,
      animate: { scale: [1, scale, 1] },
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      },
      children
    }
  );
}
function OrbitElement({
  children,
  className = "",
  radius = 100,
  duration = 10,
  delay = 0,
  direction = "cw"
}) {
  const angle = direction === "cw" ? [0, 360] : [360, 0];
  return /* @__PURE__ */ jsx27(
    motion5.div,
    {
      className: `absolute ${className}`,
      animate: { rotate: angle },
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      },
      style: { transformOrigin: `center ${radius}px` },
      children: /* @__PURE__ */ jsx27(
        motion5.div,
        {
          animate: { rotate: direction === "cw" ? [0, -360] : [-360, 0] },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "linear"
          },
          children
        }
      )
    }
  );
}
function AnimatedBlob({
  className = "",
  color = "hsl(var(--primary) / 0.3)",
  size = 400
}) {
  return /* @__PURE__ */ jsx27(
    motion5.div,
    {
      className: `absolute rounded-full blur-3xl ${className}`,
      style: {
        width: size,
        height: size,
        backgroundColor: color
      },
      animate: {
        scale: [1, 1.1, 0.95, 1.05, 1],
        x: [0, 30, -20, 10, 0],
        y: [0, -20, 30, -10, 0],
        borderRadius: [
          "60% 40% 30% 70%/60% 30% 70% 40%",
          "30% 60% 70% 40%/50% 60% 30% 60%",
          "60% 40% 30% 70%/60% 30% 70% 40%"
        ]
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  );
}
function AnimatedGrid({
  className = "",
  gridSize = 50,
  color = "hsl(var(--primary) / 0.05)"
}) {
  return /* @__PURE__ */ jsxs11(
    motion5.div,
    {
      className: `absolute inset-0 overflow-hidden ${className}`,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 },
      children: [
        /* @__PURE__ */ jsx27(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
              backgroundSize: `${gridSize}px ${gridSize}px`
            }
          }
        ),
        /* @__PURE__ */ jsx27(
          motion5.div,
          {
            className: "absolute inset-0",
            style: {
              background: `radial-gradient(circle at center, transparent 0%, hsl(var(--background)) 70%)`
            }
          }
        )
      ]
    }
  );
}
function AnimatedShapes({
  className = "",
  count = 5
}) {
  const shapeConfigs = useMemo(() => {
    const shapes = ["circle", "square", "triangle"];
    return Array.from({ length: count }).map((_, i) => ({
      shape: shapes[i % shapes.length],
      size: 20 + seededRandom(i * 1) * 40,
      left: seededRandom(i * 2) * 100,
      top: seededRandom(i * 3) * 100,
      duration: 15 + seededRandom(i * 4) * 10,
      delay: seededRandom(i * 5) * 5
    }));
  }, [count]);
  return /* @__PURE__ */ jsx27("div", { className: `absolute inset-0 overflow-hidden pointer-events-none ${className}`, children: shapeConfigs.map((config, i) => {
    const { shape, size, left, top, duration, delay } = config;
    return /* @__PURE__ */ jsxs11(
      motion5.div,
      {
        className: "absolute",
        style: {
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size
        },
        animate: {
          y: [0, -100, 0],
          x: [0, 30, -30, 0],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.5, 0.2]
        },
        transition: {
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        },
        children: [
          shape === "circle" && /* @__PURE__ */ jsx27("div", { className: "w-full h-full rounded-full border border-primary/20" }),
          shape === "square" && /* @__PURE__ */ jsx27("div", { className: "w-full h-full border border-primary/20 rotate-45" }),
          shape === "triangle" && /* @__PURE__ */ jsx27("div", { className: "w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-primary/20" })
        ]
      },
      i
    );
  }) });
}
function ParticlesBackground({
  className = "",
  particleCount = 30,
  color = "hsl(var(--primary))"
}) {
  const particleConfigs = useMemo(
    () => Array.from({ length: particleCount }).map((_, i) => ({
      size: 2 + seededRandom(i * 10) * 4,
      left: seededRandom(i * 11) * 100,
      duration: 10 + seededRandom(i * 12) * 20,
      delay: seededRandom(i * 13) * 10,
      opacity: 0.3 + seededRandom(i * 14) * 0.4,
      xOffset: (seededRandom(i * 15) - 0.5) * 100
    })),
    [particleCount]
  );
  return /* @__PURE__ */ jsx27("div", { className: `absolute inset-0 overflow-hidden pointer-events-none ${className}`, children: particleConfigs.map((config, i) => {
    const { size, left, duration, delay, opacity, xOffset } = config;
    return /* @__PURE__ */ jsx27(
      motion5.div,
      {
        className: "absolute rounded-full",
        style: {
          width: size,
          height: size,
          left: `${left}%`,
          bottom: -10,
          backgroundColor: color,
          opacity
        },
        animate: {
          y: [0, -1e3],
          x: [0, xOffset]
        },
        transition: {
          duration,
          delay,
          repeat: Infinity,
          ease: "linear"
        }
      },
      i
    );
  }) });
}
function WaveAnimation({
  className = "",
  color = "hsl(var(--primary))",
  amplitude = 20,
  frequency = 0.02
}) {
  const points = 100;
  const width = 1e3;
  const generatePath = (offset) => {
    let path = `M 0 ${amplitude}`;
    for (let i = 0; i <= points; i++) {
      const x = i / points * width;
      const y = amplitude + Math.sin(i * frequency * Math.PI * 2 + offset) * amplitude;
      path += ` L ${x} ${y}`;
    }
    return path;
  };
  return /* @__PURE__ */ jsx27("div", { className: `absolute inset-x-0 overflow-hidden ${className}`, children: /* @__PURE__ */ jsxs11(
    "svg",
    {
      viewBox: `0 0 ${width} ${amplitude * 2 + 10}`,
      className: "w-full h-auto",
      preserveAspectRatio: "none",
      children: [
        /* @__PURE__ */ jsx27(
          motion5.path,
          {
            d: generatePath(0),
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeOpacity: "0.3",
            animate: {
              d: [
                generatePath(0),
                generatePath(Math.PI),
                generatePath(Math.PI * 2)
              ]
            },
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }
          }
        ),
        /* @__PURE__ */ jsx27(
          motion5.path,
          {
            d: generatePath(Math.PI / 2),
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeOpacity: "0.2",
            animate: {
              d: [
                generatePath(Math.PI / 2),
                generatePath(Math.PI * 1.5),
                generatePath(Math.PI * 2.5)
              ]
            },
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }
          }
        )
      ]
    }
  ) });
}

// src/components/parallax-scroll.tsx
import { useScroll, useTransform } from "framer-motion";
import { useRef as useRef5, useMemo as useMemo2, memo } from "react";
import { motion as motion6 } from "framer-motion";
import { jsx as jsx28, jsxs as jsxs12 } from "react/jsx-runtime";
var ParallaxScrollComponent = ({
  images,
  className,
  renderImage
}) => {
  const gridRef = useRef5(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"]
  });
  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const { firstPart, secondPart, thirdPart } = useMemo2(() => {
    const third = Math.ceil(images.length / 3);
    return {
      firstPart: images.slice(0, third),
      secondPart: images.slice(third, 2 * third),
      thirdPart: images.slice(2 * third)
    };
  }, [images]);
  const defaultRenderImage = (src, index) => /* @__PURE__ */ jsx28(
    "img",
    {
      src,
      className: "h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0",
      alt: `Image ${index + 1}`
    }
  );
  const render = renderImage || defaultRenderImage;
  return /* @__PURE__ */ jsx28(
    "div",
    {
      className: cn("h-[40rem] items-start overflow-y-auto w-full", className),
      ref: gridRef,
      children: /* @__PURE__ */ jsxs12("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10", children: [
        /* @__PURE__ */ jsx28("div", { className: "grid gap-10", children: firstPart.map((el, idx) => /* @__PURE__ */ jsx28(
          motion6.div,
          {
            style: {
              y: translateYFirst,
              x: translateXFirst,
              rotateZ: rotateXFirst
            },
            children: render(el, idx)
          },
          "grid-1" + idx
        )) }),
        /* @__PURE__ */ jsx28("div", { className: "grid gap-10", children: secondPart.map((el, idx) => /* @__PURE__ */ jsx28(motion6.div, { children: render(el, idx + firstPart.length) }, "grid-2" + idx)) }),
        /* @__PURE__ */ jsx28("div", { className: "grid gap-10", children: thirdPart.map((el, idx) => /* @__PURE__ */ jsx28(
          motion6.div,
          {
            style: {
              y: translateYThird,
              x: translateXThird,
              rotateZ: rotateXThird
            },
            children: render(el, idx + firstPart.length + secondPart.length)
          },
          "grid-3" + idx
        )) })
      ] })
    }
  );
};
var ParallaxScroll = memo(ParallaxScrollComponent);

// src/components/reading-progress.tsx
import { useEffect as useEffect4, useState as useState6 } from "react";
import { motion as motion7, useScroll as useScroll2, useSpring as useSpring4 } from "framer-motion";
import { jsx as jsx29 } from "react/jsx-runtime";
function ReadingProgress() {
  const [isVisible, setIsVisible] = useState6(false);
  const { scrollYProgress } = useScroll2();
  const scaleX = useSpring4(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  useEffect4(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setIsVisible(value > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  return /* @__PURE__ */ jsx29(
    motion7.div,
    {
      className: "fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left",
      style: {
        scaleX,
        opacity: isVisible ? 1 : 0
      },
      transition: { opacity: { duration: 0.2 } }
    }
  );
}

// src/components/command-palette.tsx
import { useState as useState7, useEffect as useEffect5, useCallback, useRef as useRef6, useMemo as useMemo3 } from "react";
import { motion as motion8, AnimatePresence } from "framer-motion";
import { Fragment as Fragment3, jsx as jsx30, jsxs as jsxs13 } from "react/jsx-runtime";
function CommandPalette({
  className,
  commands,
  categories = {},
  placeholder = "Search commands...",
  onSearch,
  triggerLabel = "Search",
  shortcutKey = "k"
}) {
  const [isOpen, setIsOpen] = useState7(false);
  const [query, setQuery] = useState7("");
  const [selectedIndex, setSelectedIndex] = useState7(0);
  const inputRef = useRef6(null);
  const listRef = useRef6(null);
  const filteredCommands = useMemo3(() => {
    if (!query.trim()) return commands;
    const lowerQuery = query.toLowerCase();
    const filtered = commands.filter((cmd) => {
      const titleMatch = cmd.title.toLowerCase().includes(lowerQuery);
      const descMatch = cmd.description?.toLowerCase().includes(lowerQuery);
      const keywordMatch = cmd.keywords?.some(
        (k) => k.toLowerCase().includes(lowerQuery)
      );
      return titleMatch || descMatch || keywordMatch;
    });
    const searchResults = onSearch ? onSearch(query) : [];
    return [...filtered, ...searchResults];
  }, [query, commands, onSearch]);
  const handleKeyDown = useCallback(
    (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === shortcutKey) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }
      if (!isOpen) return;
      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          setQuery("");
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex(
            (prev) => prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex(
            (prev) => prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            setIsOpen(false);
            setQuery("");
          }
          break;
      }
    },
    [isOpen, filteredCommands, selectedIndex, shortcutKey]
  );
  useEffect5(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  useEffect5(() => {
    setSelectedIndex(0);
  }, [filteredCommands.length]);
  useEffect5(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);
  useEffect5(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);
  useEffect5(() => {
    if (listRef.current && filteredCommands.length > 0) {
      const selectedElement = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      selectedElement?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex, filteredCommands.length]);
  const groupedCommands = useMemo3(() => {
    const groups = {};
    filteredCommands.forEach((cmd) => {
      if (!groups[cmd.category]) {
        groups[cmd.category] = [];
      }
      groups[cmd.category].push(cmd);
    });
    return groups;
  }, [filteredCommands]);
  const getCategoryLabel = (category) => {
    return categories[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };
  let globalIndex = -1;
  return /* @__PURE__ */ jsxs13(Fragment3, { children: [
    /* @__PURE__ */ jsxs13(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(true),
        className: cn(
          "flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
          "bg-muted/50 hover:bg-muted rounded-lg border border-border/50 transition-colors",
          className
        ),
        "aria-label": "Open command palette",
        children: [
          /* @__PURE__ */ jsxs13("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
            /* @__PURE__ */ jsx30("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsx30("path", { d: "m21 21-4.3-4.3" })
          ] }),
          /* @__PURE__ */ jsx30("span", { className: "hidden sm:inline", children: triggerLabel }),
          /* @__PURE__ */ jsxs13("kbd", { className: "hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium", children: [
            /* @__PURE__ */ jsx30("span", { className: "text-xs", children: "\u2318" }),
            shortcutKey.toUpperCase()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx30(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs13(Fragment3, { children: [
      /* @__PURE__ */ jsx30(
        motion8.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setIsOpen(false),
          className: "fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        }
      ),
      /* @__PURE__ */ jsx30(
        motion8.div,
        {
          initial: { opacity: 0, scale: 0.95, y: -20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95, y: -20 },
          transition: { duration: 0.15 },
          className: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-xl z-50 px-4",
          children: /* @__PURE__ */ jsxs13("div", { className: "bg-popover border border-border rounded-xl shadow-2xl overflow-hidden", children: [
            /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-border", children: [
              /* @__PURE__ */ jsxs13("svg", { className: "h-5 w-5 text-muted-foreground shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
                /* @__PURE__ */ jsx30("circle", { cx: "11", cy: "11", r: "8" }),
                /* @__PURE__ */ jsx30("path", { d: "m21 21-4.3-4.3" })
              ] }),
              /* @__PURE__ */ jsx30(
                "input",
                {
                  ref: inputRef,
                  type: "text",
                  value: query,
                  onChange: (e) => setQuery(e.target.value),
                  placeholder,
                  className: "flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                }
              ),
              query && /* @__PURE__ */ jsx30(
                "button",
                {
                  type: "button",
                  onClick: () => setQuery(""),
                  className: "text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ jsx30("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx30("path", { d: "M18 6 6 18M6 6l12 12" }) })
                }
              ),
              /* @__PURE__ */ jsx30("kbd", { className: "hidden sm:inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground", children: "ESC" })
            ] }),
            /* @__PURE__ */ jsx30(
              "div",
              {
                ref: listRef,
                className: "max-h-[60vh] overflow-y-auto p-2",
                role: "listbox",
                children: filteredCommands.length === 0 ? /* @__PURE__ */ jsxs13("div", { className: "py-8 text-center text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs13("p", { children: [
                    'No results found for "',
                    query,
                    '"'
                  ] }),
                  /* @__PURE__ */ jsx30("p", { className: "text-sm mt-1", children: "Try searching for something else" })
                ] }) : Object.entries(groupedCommands).map(([category, cmds]) => {
                  if (cmds.length === 0) return null;
                  return /* @__PURE__ */ jsxs13("div", { className: "mb-2", children: [
                    /* @__PURE__ */ jsx30("div", { className: "px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: getCategoryLabel(category) }),
                    cmds.map((cmd) => {
                      globalIndex++;
                      const isSelected = globalIndex === selectedIndex;
                      return /* @__PURE__ */ jsxs13(
                        "button",
                        {
                          type: "button",
                          "data-index": globalIndex,
                          onClick: () => {
                            cmd.action();
                            setIsOpen(false);
                            setQuery("");
                          },
                          onMouseEnter: () => setSelectedIndex(globalIndex),
                          className: cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                            isSelected ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-muted"
                          ),
                          role: "option",
                          "aria-selected": isSelected,
                          children: [
                            cmd.icon && /* @__PURE__ */ jsx30(
                              "div",
                              {
                                className: cn(
                                  "shrink-0 p-1.5 rounded-md",
                                  isSelected ? "bg-primary/20" : "bg-muted"
                                ),
                                children: cmd.icon
                              }
                            ),
                            /* @__PURE__ */ jsxs13("div", { className: "flex-1 min-w-0", children: [
                              /* @__PURE__ */ jsx30("div", { className: "font-medium text-foreground truncate", children: cmd.title }),
                              cmd.description && /* @__PURE__ */ jsx30("div", { className: "text-sm text-muted-foreground truncate", children: cmd.description })
                            ] }),
                            isSelected && /* @__PURE__ */ jsx30("svg", { className: "h-4 w-4 shrink-0 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx30("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
                          ]
                        },
                        cmd.id
                      );
                    })
                  ] }, category);
                })
              }
            ),
            /* @__PURE__ */ jsx30("div", { className: "px-4 py-2 border-t border-border bg-muted/30", children: /* @__PURE__ */ jsxs13("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxs13("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx30("kbd", { className: "px-1.5 py-0.5 rounded border bg-muted font-mono", children: "\u2191\u2193" }),
                  "navigate"
                ] }),
                /* @__PURE__ */ jsxs13("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx30("kbd", { className: "px-1.5 py-0.5 rounded border bg-muted font-mono", children: "\u21B5" }),
                  "select"
                ] })
              ] }),
              /* @__PURE__ */ jsxs13("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx30("kbd", { className: "px-1.5 py-0.5 rounded border bg-muted font-mono", children: "esc" }),
                "close"
              ] })
            ] }) })
          ] })
        }
      )
    ] }) })
  ] });
}

// src/components/breadcrumb-nav.tsx
import { jsx as jsx31, jsxs as jsxs14 } from "react/jsx-runtime";
function DefaultLink({ href, className, children }) {
  return /* @__PURE__ */ jsx31("a", { href, className, children });
}
function BreadcrumbNav({
  items,
  className = "",
  separator,
  linkComponent: LinkComponent = DefaultLink
}) {
  if (items.length === 0) return null;
  const defaultSeparator = /* @__PURE__ */ jsx31("svg", { className: "mx-2 h-4 w-4 text-muted-foreground", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx31("path", { d: "m9 18 6-6-6-6" }) });
  return /* @__PURE__ */ jsx31("nav", { "aria-label": "Breadcrumb", className: cn("mb-6 text-sm", className), children: /* @__PURE__ */ jsx31("ol", { className: "flex items-center space-x-2", children: items.map((item, index) => /* @__PURE__ */ jsxs14("li", { className: "flex items-center", children: [
    index > 0 && (separator || defaultSeparator),
    index === items.length - 1 ? /* @__PURE__ */ jsx31("span", { className: "font-medium text-foreground", "aria-current": "page", children: item.label }) : /* @__PURE__ */ jsx31(
      LinkComponent,
      {
        href: item.href,
        className: "text-muted-foreground hover:text-foreground transition-colors",
        children: item.label
      }
    )
  ] }, item.href)) }) });
}

// src/components/expandable-card.tsx
import { motion as motion9, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { useState as useState8 } from "react";
import { Fragment as Fragment4, jsx as jsx32, jsxs as jsxs15 } from "react/jsx-runtime";
function ExpandableCard({
  title,
  description,
  children,
  thumbnail,
  tags,
  actions,
  className = "",
  defaultExpanded = false
}) {
  const [isExpanded, setIsExpanded] = useState8(defaultExpanded);
  return /* @__PURE__ */ jsxs15(
    motion9.div,
    {
      layout: true,
      className: `group relative w-full bg-secondary/50 rounded-xl overflow-hidden flex flex-col h-full ${className}`,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.3 },
      children: [
        thumbnail && /* @__PURE__ */ jsx32(motion9.div, { layout: true, className: "relative aspect-square w-full overflow-hidden", children: thumbnail }),
        /* @__PURE__ */ jsx32(motion9.div, { layout: true, className: "p-4 flex flex-col flex-grow", children: /* @__PURE__ */ jsxs15(motion9.div, { layout: true, className: "flex flex-col gap-3 h-full", children: [
          /* @__PURE__ */ jsxs15("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxs15("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx32("h3", { className: "text-lg font-semibold tracking-tight", children: title }),
              description && /* @__PURE__ */ jsx32("p", { className: "text-muted-foreground text-sm line-clamp-2", children: description })
            ] }),
            actions
          ] }),
          tags && tags.length > 0 && /* @__PURE__ */ jsx32("div", { className: "flex flex-wrap gap-1.5 mt-auto pt-3", children: tags.map((tag) => /* @__PURE__ */ jsx32(
            "span",
            {
              className: "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground",
              children: tag
            },
            tag
          )) }),
          children && /* @__PURE__ */ jsxs15(Fragment4, { children: [
            /* @__PURE__ */ jsxs15(
              "button",
              {
                onClick: () => setIsExpanded(!isExpanded),
                className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2",
                children: [
                  /* @__PURE__ */ jsx32("span", { children: isExpanded ? "Show less" : "Learn more" }),
                  /* @__PURE__ */ jsx32(
                    "svg",
                    {
                      className: `h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`,
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: /* @__PURE__ */ jsx32("path", { d: "m6 9 6 6 6-6" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx32(AnimatePresence2, { children: isExpanded && /* @__PURE__ */ jsx32(
              motion9.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3 },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsx32("div", { className: "pt-2", children })
              }
            ) })
          ] })
        ] }) })
      ]
    }
  );
}

// src/components/scroll-to-top.tsx
import { useState as useState9, useEffect as useEffect6 } from "react";
import { motion as motion10, AnimatePresence as AnimatePresence3 } from "framer-motion";
import { jsx as jsx33 } from "react/jsx-runtime";
function ScrollToTop({ threshold = 300, className = "" }) {
  const [isVisible, setIsVisible] = useState9(false);
  useEffect6(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [threshold]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx33(AnimatePresence3, { children: isVisible && /* @__PURE__ */ jsx33(
    motion10.div,
    {
      initial: { opacity: 0, scale: 0.8, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.8, y: 20 },
      transition: { duration: 0.2 },
      className: `fixed bottom-8 right-8 z-40 ${className}`,
      children: /* @__PURE__ */ jsx33(
        "button",
        {
          onClick: scrollToTop,
          className: "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center",
          "aria-label": "Scroll to top",
          children: /* @__PURE__ */ jsx33("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx33("path", { d: "m18 15-6-6-6 6" }) })
        }
      )
    }
  ) });
}

// src/components/page-transition.tsx
import { motion as motion11, AnimatePresence as AnimatePresence4, useScroll as useScroll3, useTransform as useTransform2 } from "framer-motion";
import { useRef as useRef7 } from "react";
import { jsx as jsx34 } from "react/jsx-runtime";
var variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  clipReveal: {
    initial: { clipPath: "inset(0 100% 0 0)" },
    animate: { clipPath: "inset(0 0% 0 0)" },
    exit: { clipPath: "inset(0 0 0 100%)" }
  }
};
function PageTransition({
  children,
  className = "",
  variant = "slideUp",
  transitionKey
}) {
  return /* @__PURE__ */ jsx34(AnimatePresence4, { mode: "wait", children: /* @__PURE__ */ jsx34(
    motion11.div,
    {
      className,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: variants[variant],
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      },
      children
    },
    transitionKey
  ) });
}
var directionVariants = {
  up: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  },
  down: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 }
  },
  left: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  },
  right: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
};
function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true
}) {
  const variant = directionVariants[direction];
  return /* @__PURE__ */ jsx34(
    motion11.div,
    {
      className,
      initial: variant.initial,
      whileInView: variant.animate,
      viewport: { once, margin: "-100px" },
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      },
      children
    }
  );
}
function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0.2,
  once = true
}) {
  return /* @__PURE__ */ jsx34(
    motion11.div,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once, margin: "-50px" },
      variants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      },
      children
    }
  );
}
function StaggerItem({ children, className = "" }) {
  return /* @__PURE__ */ jsx34(
    motion11.div,
    {
      className,
      variants: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      },
      children
    }
  );
}
function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up"
}) {
  const ref = useRef7(null);
  const { scrollYProgress } = useScroll3({
    target: ref,
    offset: ["start end", "end start"]
  });
  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform2(
    scrollYProgress,
    [0, 1],
    [100 * speed * multiplier, -100 * speed * multiplier]
  );
  return /* @__PURE__ */ jsx34(motion11.div, { ref, className, style: { y }, children });
}
function ScaleOnScroll({
  children,
  className = "",
  scaleRange = [0.8, 1]
}) {
  const ref = useRef7(null);
  const { scrollYProgress } = useScroll3({
    target: ref,
    offset: ["start end", "center center"]
  });
  const scale = useTransform2(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform2(scrollYProgress, [0, 0.5], [0, 1]);
  return /* @__PURE__ */ jsx34(motion11.div, { ref, className, style: { scale, opacity }, children });
}
function MaskReveal({
  children,
  className = "",
  direction = "left",
  delay = 0
}) {
  const clipPaths = {
    left: {
      initial: "inset(0 100% 0 0)",
      animate: "inset(0 0% 0 0)"
    },
    right: {
      initial: "inset(0 0 0 100%)",
      animate: "inset(0 0 0 0%)"
    },
    up: {
      initial: "inset(100% 0 0 0)",
      animate: "inset(0% 0 0 0)"
    },
    down: {
      initial: "inset(0 0 100% 0)",
      animate: "inset(0 0 0% 0)"
    }
  };
  const clipPath = clipPaths[direction];
  return /* @__PURE__ */ jsx34(
    motion11.div,
    {
      className,
      initial: { clipPath: clipPath.initial },
      whileInView: { clipPath: clipPath.animate },
      viewport: { once: true, margin: "-50px" },
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      },
      children
    }
  );
}

// src/components/error-boundary.tsx
import { Component } from "react";
import { jsx as jsx35, jsxs as jsxs16 } from "react/jsx-runtime";
var ErrorBoundary = class extends Component {
  constructor(props) {
    super(props);
    this.resetErrorBoundary = () => {
      this.setState({ hasError: false, error: null });
    };
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    this.props.onError?.(error, errorInfo);
  }
  render() {
    if (this.state.hasError && this.state.error) {
      const { fallback } = this.props;
      const { error } = this.state;
      if (typeof fallback === "function") {
        return fallback(error, this.resetErrorBoundary);
      }
      if (fallback) {
        return fallback;
      }
      return /* @__PURE__ */ jsx35(
        DefaultErrorFallback,
        {
          error,
          reset: this.resetErrorBoundary
        }
      );
    }
    return this.props.children;
  }
};
function DefaultErrorFallback({
  error,
  reset,
  title = "Something went wrong",
  description = "We encountered an unexpected error. Please try again."
}) {
  return /* @__PURE__ */ jsx35("div", { className: "flex min-h-[50vh] flex-col items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxs16("div", { className: "neu-card rounded-2xl p-8 sm:p-12 max-w-md w-full text-center", children: [
    /* @__PURE__ */ jsx35("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsx35("div", { className: "neu-pressed rounded-full p-4", children: /* @__PURE__ */ jsx35(
      "svg",
      {
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx35(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx35("h2", { className: "text-section-title mb-3", children: title }),
    /* @__PURE__ */ jsx35("p", { className: "text-description mb-6", children: description }),
    /* @__PURE__ */ jsx35("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: /* @__PURE__ */ jsx35(
      "button",
      {
        onClick: reset,
        className: "cta-primary px-6 py-3 rounded-xl focus-ring",
        children: "Try again"
      }
    ) })
  ] }) });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnimatedBlob,
  AnimatedCard,
  AnimatedGrid,
  AnimatedHeading,
  AnimatedShapes,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  BorderBeamButton,
  BreadcrumbNav,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CommandPalette,
  Container,
  CursorFollower,
  CursorGlow,
  DefaultErrorFallback,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  ErrorBoundary,
  ExpandableCard,
  FloatingElement,
  GlassCard,
  GlowButton,
  GlowSection,
  GradientCursorGlow,
  GradientText,
  Heading,
  HeroGlowSection,
  Input,
  Label,
  MagneticButton,
  MaskReveal,
  OrbitElement,
  PageTransition,
  ParallaxScroll,
  ParallaxSection,
  ParticlesBackground,
  PulsingElement,
  ReadingProgress,
  RippleButton,
  RotatingElement,
  ScaleOnScroll,
  ScrollToTop,
  Section,
  SectionReveal,
  Separator,
  Skeleton,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonText,
  SpotlightCursor,
  StaggerContainer,
  StaggerItem,
  SubtleGlowSection,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TrailCursor,
  WaveAnimation,
  avatarVariants,
  badgeVariants,
  buttonVariants,
  cardVariants,
  cn,
  containerVariants,
  debounce,
  fadeIn,
  fadeInScale,
  fadeInUp,
  formatCurrency,
  formatRelativeTime,
  generateId,
  glassCardVariants,
  headingVariants,
  iconPop,
  inputVariants,
  isClient,
  isServer,
  labelVariants,
  parallaxScroll,
  photoReveal,
  scaleUp,
  sectionVariants,
  showContainerVariants,
  showItemSpringVariants,
  showItemVariants,
  skeletonVariants,
  slideIn,
  slideInLeft,
  slideInRight,
  springBouncy,
  springGentle,
  springSnappy,
  stagger,
  staggerContainer,
  staggerContainerVariants,
  staggerItem,
  staggerItemVariants,
  tabsListVariants,
  tabsTriggerVariants,
  textareaVariants,
  toastVariants,
  useIsClient,
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useMediaQuery,
  usePrefersDarkMode,
  usePrefersReducedMotion
};
