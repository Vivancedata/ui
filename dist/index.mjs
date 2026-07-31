// src/lib/utils.ts
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
var FONT_SIZE_KEYS = [
  "display-xl",
  "display",
  "heading-1",
  "heading-2",
  "heading-3",
  "heading-4",
  "eyebrow",
  "body-lg",
  "body",
  "body-sm",
  "caption",
  "code"
];
var twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [...FONT_SIZE_KEYS] }]
    }
  }
});
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
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Ink fill. Inverts to a light pill in dark mode via the token.
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // The hairline is the whole treatment -- no backdrop blur, no lift.
        outline: "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        // The white (or near-black, in dark) pill counterpart to `default`.
        secondary: "border border-border bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Links carry the brand green, not ink.
        link: "text-brand underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground hover:bg-success/90"
      },
      shape: {
        square: "rounded-sm",
        pill: "rounded-pill"
      },
      size: {
        default: "h-10 px-4 text-body-sm",
        sm: "h-8 px-3 text-caption",
        lg: "h-11 px-6 text-body",
        xl: "h-12 px-8 text-body",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "default",
      shape: "square",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({
    className,
    variant,
    shape,
    size,
    asChild = false,
    isLoading,
    children,
    disabled,
    ...props
  }, ref) => {
    const content = isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
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
    ] }) : children;
    if (asChild) {
      const SlotComponent = Slot;
      return /* @__PURE__ */ jsx(
        SlotComponent,
        {
          className: cn(buttonVariants({ variant, shape, size, className })),
          ref,
          "aria-busy": isLoading || void 0,
          "aria-disabled": disabled || isLoading || void 0,
          "data-disabled": disabled || isLoading ? "" : void 0,
          ...props,
          children: content
        }
      );
    }
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: cn(buttonVariants({ variant, shape, size, className })),
        ref,
        disabled: disabled || isLoading,
        ...props,
        children: content
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
  "rounded-md border text-card-foreground transition-colors duration-default",
  {
    variants: {
      variant: {
        // Level 0: flat. White card on the near-white sheet, hairline border.
        default: "border-border bg-card",
        outline: "border-border bg-background",
        ghost: "border-transparent bg-transparent",
        // Level 1: whisper. For a tile that needs to read as lifted.
        raised: "border-border bg-card shadow-1",
        // Level 2: floating. The ceiling -- menus, modals, featured tiles.
        elevated: "border-border bg-card shadow-2"
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
var CardTitle = React2.forwardRef(
  ({ className, as: Component2 = "h3", ...props }, ref) => {
    const Heading2 = Component2;
    return /* @__PURE__ */ jsx2(
      Heading2,
      {
        ref,
        className: cn(
          "text-xl font-semibold leading-tight tracking-tight sm:text-2xl",
          className
        ),
        ...props
      }
    );
  }
);
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
        outline: "border-border text-foreground",
        // Status variants
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        // Muted status variants (softer backgrounds)
        "success-muted": "border-transparent bg-[hsl(var(--success-muted))] text-success",
        "warning-muted": "border-transparent bg-[hsl(var(--warning-muted))] text-warning",
        "info-muted": "border-transparent bg-[hsl(var(--info-muted))] text-info",
        // The hairline-outlined chip -- the system's quietest badge.
        brand: "border-transparent bg-brand text-brand-foreground"
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
  "flex w-full rounded-sm text-body-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-faint focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-fast",
  {
    variants: {
      variant: {
        default: "border border-input bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "border-0 bg-transparent focus-visible:bg-accent"
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
  "flex min-h-[80px] w-full rounded-sm text-body-sm ring-offset-background placeholder:text-faint focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-fast resize-none",
  {
    variants: {
      variant: {
        default: "border border-input bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "border-0 bg-transparent focus-visible:bg-accent"
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
var Label = React5.forwardRef(
  ({ className, variant, ...props }, ref) => {
    const Root16 = LabelPrimitive.Root;
    return /* @__PURE__ */ jsx6(
      Root16,
      {
        ref,
        className: cn(labelVariants({ variant }), className),
        ...props
      }
    );
  }
);
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/alert.tsx
import * as React6 from "react";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var alertVariants = cva7(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-success/50 bg-success/10 text-success dark:border-success [&>svg]:text-success",
        warning: "border-warning/50 bg-warning/10 text-warning dark:border-warning [&>svg]:text-warning",
        info: "border-info/50 bg-info/10 text-info dark:border-info [&>svg]:text-info"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React6.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx7(
    "div",
    {
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  )
);
Alert.displayName = "Alert";
var AlertTitle = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  "div",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

// src/components/alert-dialog.tsx
import * as React7 from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  AlertDialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs4(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx8(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx8(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx8(
  "div",
  {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx8(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/components/skeleton.tsx
import * as React8 from "react";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var skeletonBaseStyles = cva8("animate-pulse", {
  variants: {
    tone: {
      default: "bg-muted",
      shimmer: "shimmer"
    },
    shape: {
      default: "rounded-md",
      circular: "rounded-full",
      rounded: "rounded-xl"
    }
  },
  defaultVariants: {
    tone: "default",
    shape: "default"
  }
});
function resolveSkeletonStyle(variant, shape) {
  if (shape) {
    return {
      tone: variant === "shimmer" ? variant : "default",
      shape
    };
  }
  if (variant === "circular" || variant === "rounded") {
    return { tone: "default", shape: variant };
  }
  return {
    tone: variant === "shimmer" ? variant : "default",
    shape: "default"
  };
}
function skeletonVariants({
  variant,
  shape,
  className
} = {}) {
  const resolved = resolveSkeletonStyle(variant, shape);
  return cn(skeletonBaseStyles(resolved), className);
}
var Skeleton = React8.forwardRef(
  ({ className, variant, shape, ...props }, ref) => /* @__PURE__ */ jsx9(
    "div",
    {
      ref,
      "aria-hidden": "true",
      className: skeletonVariants({ variant, shape, className }),
      ...props
    }
  )
);
Skeleton.displayName = "Skeleton";
var SkeletonText = React8.forwardRef(({ className, lines = 3, variant, shape, ...props }, ref) => /* @__PURE__ */ jsx9("div", { ref, className: cn("space-y-2", className), ...props, children: Array.from({ length: lines }, (_, index) => /* @__PURE__ */ jsx9(
  Skeleton,
  {
    variant,
    shape,
    className: cn("h-4", index === lines - 1 && "w-4/5")
  },
  `line-${index + 1}`
)) }));
SkeletonText.displayName = "SkeletonText";
var SkeletonCard = React8.forwardRef(
  ({ className, variant, shape, ...props }, ref) => /* @__PURE__ */ jsx9(
    "div",
    {
      ref,
      className: cn(
        "overflow-hidden rounded-xl border bg-card/70 p-4 shadow-sm",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs5("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx9(Skeleton, { variant, shape, className: "aspect-square w-full rounded-none" }),
        /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx9(Skeleton, { variant, shape, className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsx9(Skeleton, { variant, shape, className: "h-4 w-1/2" }),
          /* @__PURE__ */ jsx9(Skeleton, { variant, shape, className: "h-16 w-full" }),
          /* @__PURE__ */ jsxs5("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx9(Skeleton, { variant, shape: "circular", className: "h-6 w-16" }),
            /* @__PURE__ */ jsx9(Skeleton, { variant, shape: "circular", className: "h-6 w-20" })
          ] })
        ] })
      ] })
    }
  )
);
SkeletonCard.displayName = "SkeletonCard";
var SkeletonInput = React8.forwardRef(
  ({ className }, ref) => /* @__PURE__ */ jsxs5("div", { ref, className: cn("space-y-2", className), children: [
    /* @__PURE__ */ jsx9(Skeleton, { className: "h-4 w-24" }),
    /* @__PURE__ */ jsx9(Skeleton, { className: "h-10 w-full rounded-lg" })
  ] })
);
SkeletonInput.displayName = "SkeletonInput";
var SkeletonButton = React8.forwardRef(
  ({ className }, ref) => /* @__PURE__ */ jsx9(Skeleton, { ref, className: cn("h-10 w-32 rounded-xl", className) })
);
SkeletonButton.displayName = "SkeletonButton";
var SkeletonAvatar = React8.forwardRef(({ className, size = "default", variant, ...props }, ref) => {
  const sizeClasses3 = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-14 w-14"
  };
  return /* @__PURE__ */ jsx9(
    Skeleton,
    {
      ref,
      variant,
      shape: "circular",
      className: cn(sizeClasses3[size], className),
      ...props
    }
  );
});
SkeletonAvatar.displayName = "SkeletonAvatar";

// src/components/avatar.tsx
import * as React9 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
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
        ring: "bg-muted ring-2 ring-primary/25 ring-offset-2 ring-offset-background"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
);
var Avatar = React9.forwardRef(({ className, size, variant, ...props }, ref) => /* @__PURE__ */ jsx10(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(avatarVariants({ size, variant }), className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/carousel.tsx
import * as React10 from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var CarouselContext = React10.createContext(null);
function useCarousel() {
  const context = React10.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React10.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React10.useState(false);
    const [canScrollNext, setCanScrollNext] = React10.useState(false);
    const onSelect = React10.useCallback((nextApi) => {
      if (!nextApi) {
        return;
      }
      setCanScrollPrev(nextApi.canScrollPrev());
      setCanScrollNext(nextApi.canScrollNext());
    }, []);
    const scrollPrev = React10.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React10.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React10.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React10.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React10.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx11(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx11(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React10.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx11("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx11(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React10.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx11(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React10.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs6(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx11(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React10.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs6(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx11(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";

// src/components/progress.tsx
import * as React11 from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var Progress = React11.forwardRef(
  ({
    className,
    value = 0,
    max = 100,
    indicatorClassName,
    style,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...props
  }, ref) => {
    const safeMax = max > 0 ? max : 100;
    const clampedValue = Math.min(safeMax, Math.max(0, value));
    const percentage = clampedValue / safeMax * 100;
    return /* @__PURE__ */ jsx12(
      "div",
      {
        ref,
        role: "progressbar",
        "aria-valuenow": clampedValue,
        "aria-valuemin": 0,
        "aria-valuemax": safeMax,
        "aria-label": ariaLabel ?? (ariaLabelledBy ? void 0 : `${Math.round(percentage)}% progress`),
        "aria-labelledby": ariaLabelledBy,
        className: cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
          className
        ),
        style,
        ...props,
        children: /* @__PURE__ */ jsx12(
          "div",
          {
            className: cn(
              "h-full bg-primary transition-all duration-300 ease-in-out",
              indicatorClassName
            ),
            style: { width: `${percentage}%` }
          }
        )
      }
    );
  }
);
Progress.displayName = "Progress";

// src/components/progress-circle.tsx
import * as React12 from "react";
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var sizeClasses = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-20 w-20",
  xl: "h-28 w-28"
};
var strokeWidths = {
  sm: 4,
  md: 5,
  lg: 6,
  xl: 8
};
var textSizes = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-xl"
};
function ProgressCircle({
  progress,
  size = "md",
  showPercentage = false,
  className,
  ...props
}) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - clampedProgress / 100 * circumference;
  const gradientId = React12.useId().replace(/:/g, "");
  return /* @__PURE__ */ jsxs7("div", { className: cn("relative group", sizeClasses[size], className), ...props, children: [
    clampedProgress >= 75 ? /* @__PURE__ */ jsx13("div", { className: "absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" }) : null,
    /* @__PURE__ */ jsxs7(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "relative h-full w-full -rotate-90",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsx13("defs", { children: /* @__PURE__ */ jsxs7("linearGradient", { id: gradientId, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
            /* @__PURE__ */ jsx13("stop", { offset: "0%", stopColor: "hsl(var(--primary))" }),
            /* @__PURE__ */ jsx13("stop", { offset: "100%", stopColor: "hsl(var(--accent))" })
          ] }) }),
          /* @__PURE__ */ jsx13(
            "circle",
            {
              className: "stroke-muted/50",
              fill: "none",
              strokeWidth: strokeWidths[size],
              r: radius,
              cx: "50",
              cy: "50"
            }
          ),
          /* @__PURE__ */ jsx13(
            "circle",
            {
              className: cn(
                "transition-all duration-500 ease-out",
                clampedProgress >= 100 ? "stroke-success" : ""
              ),
              stroke: clampedProgress < 100 ? `url(#${gradientId})` : void 0,
              fill: "none",
              strokeWidth: strokeWidths[size],
              strokeDasharray: circumference,
              strokeDashoffset,
              strokeLinecap: "round",
              r: radius,
              cx: "50",
              cy: "50",
              style: {
                filter: clampedProgress >= 75 ? "drop-shadow(0 0 6px hsl(var(--primary) / 0.5))" : void 0
              }
            }
          )
        ]
      }
    ),
    showPercentage ? /* @__PURE__ */ jsx13("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs7(
      "span",
      {
        className: cn(
          "font-semibold tabular-nums transition-colors duration-300",
          textSizes[size],
          clampedProgress >= 100 ? "text-success" : "text-foreground"
        ),
        children: [
          Math.round(clampedProgress),
          "%"
        ]
      }
    ) }) : null
  ] });
}
function ProgressCircleSkeleton({ size = "md" }) {
  return /* @__PURE__ */ jsx13("div", { className: cn("animate-pulse rounded-full bg-muted", sizeClasses[size]) });
}

// src/components/spinner.tsx
import { Loader2 } from "lucide-react";
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var sizeClasses2 = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
};
var borderSizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12"
};
function Spinner({ size = "md", className, text, ...props }) {
  return /* @__PURE__ */ jsxs8("div", { className: cn("flex items-center justify-center gap-2", className), ...props, children: [
    /* @__PURE__ */ jsx14(Loader2, { className: cn("animate-spin", sizeClasses2[size]), "aria-hidden": "true" }),
    text ? /* @__PURE__ */ jsx14("span", { className: "text-muted-foreground", children: text }) : null
  ] });
}
function PageSpinner({ text = "Loading..." }) {
  return /* @__PURE__ */ jsx14("div", { className: "flex min-h-[60vh] items-center justify-center", children: /* @__PURE__ */ jsx14(Spinner, { size: "lg", text }) });
}
function BorderSpinner({
  size = "md",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: cn(
        "animate-spin rounded-full border-b-2 border-t-2 border-primary",
        borderSizeClasses[size],
        className
      ),
      ...props
    }
  );
}

// src/components/status-badge.tsx
import { AlertTriangle, CheckCircle, Clock, Info, XCircle } from "lucide-react";
import { jsx as jsx15 } from "react/jsx-runtime";
var statusConfig = {
  success: {
    className: "border-success bg-success/10 text-success",
    icon: CheckCircle,
    defaultText: "Success"
  },
  error: {
    className: "border-destructive bg-destructive/10 text-destructive",
    icon: XCircle,
    defaultText: "Error"
  },
  warning: {
    className: "border-warning bg-warning/10 text-warning",
    icon: AlertTriangle,
    defaultText: "Warning"
  },
  pending: {
    className: "border-warning bg-warning/10 text-warning",
    icon: Clock,
    defaultText: "Pending"
  },
  info: {
    className: "border-info bg-info/10 text-info",
    icon: Info,
    defaultText: "Info"
  }
};
function StatusBadge({
  status,
  children,
  showIcon = true,
  className,
  ...props
}) {
  const config = statusConfig[status];
  const Icon2 = config.icon;
  return /* @__PURE__ */ jsx15(
    Badge,
    {
      variant: "outline",
      className: cn(config.className, className),
      icon: showIcon ? /* @__PURE__ */ jsx15(Icon2, { className: "h-3 w-3" }) : void 0,
      ...props,
      children: children ?? config.defaultText
    }
  );
}

// src/components/separator.tsx
import * as React13 from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var Separator = React13.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx16(
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
import * as React14 from "react";
import { cva as cva10 } from "class-variance-authority";
var sectionVariants = cva10("w-full", {
  variants: {
    variant: {
      default: "",
      // The hero mesh -- the system's only decorative treatment. Use on a hero
      // band and nowhere else.
      mesh: "hero-mesh",
      muted: "bg-muted/50",
      card: "bg-card rounded-md border border-border"
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
var Section = React14.forwardRef(
  ({ className, variant, padding, container, as: Component2 = "section", ...props }, ref) => React14.createElement(Component2, {
    ...props,
    ref,
    className: cn(sectionVariants({ variant, padding, container }), className)
  })
);
Section.displayName = "Section";

// src/components/heading.tsx
import * as React15 from "react";
import { cva as cva11 } from "class-variance-authority";
import { jsx as jsx17 } from "react/jsx-runtime";
var headingVariants = cva11("text-balance", {
  variants: {
    level: {
      "display-xl": "text-display-xl",
      display: "text-display",
      h1: "text-heading-1",
      h2: "text-heading-2",
      h3: "text-heading-3",
      h4: "text-heading-4"
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-brand"
    }
  },
  defaultVariants: {
    level: "h1",
    variant: "default"
  }
});
var Heading = React15.forwardRef(
  ({ className, level, variant, as, children, ...props }, ref) => {
    const Component2 = as || (level === "display" || level === "display-xl" ? "h1" : level || "h1");
    return /* @__PURE__ */ jsx17(
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
import * as React16 from "react";
import { cva as cva12 } from "class-variance-authority";
import { jsx as jsx18 } from "react/jsx-runtime";
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
var Container = React16.forwardRef(
  ({ className, size, padding, ...props }, ref) => /* @__PURE__ */ jsx18(
    "div",
    {
      ref,
      className: cn(containerVariants({ size, padding }), className),
      ...props
    }
  )
);
Container.displayName = "Container";

// src/components/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jsx as jsx19 } from "react/jsx-runtime";
function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ jsx19(NextThemesProvider, { ...props, children });
}

// src/components/theme-toggle.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// src/components/dropdown-menu.tsx
import * as React17 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React17.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs9(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx20(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React17.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx20(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx20(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React17.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx20(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React17.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs9(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx20("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx20(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx20(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React17.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs9(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx20("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx20(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx20(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React17.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx20(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx20(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  }
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/theme-toggle.tsx
import { Fragment as Fragment2, jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
function ThemeToggle({
  mode = "toggle",
  variant,
  size = "icon",
  align = "end",
  showSystemOption = mode === "menu",
  type,
  ...buttonProps
}) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const currentTheme = theme === "system" && !showSystemOption ? resolvedTheme ?? "light" : theme ?? "system";
  const buttonVariant = variant ?? (mode === "menu" ? "outline" : "ghost");
  const ariaLabel = buttonProps["aria-label"] ?? (mode === "menu" ? "Change theme" : "Toggle theme");
  const iconSizeClassName = mode === "menu" ? "h-[1.2rem] w-[1.2rem]" : "h-5 w-5";
  const iconContent = /* @__PURE__ */ jsxs10(Fragment2, { children: [
    /* @__PURE__ */ jsx21(
      Sun,
      {
        className: `${iconSizeClassName} rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`
      }
    ),
    /* @__PURE__ */ jsx21(
      Moon,
      {
        className: `absolute ${iconSizeClassName} rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`
      }
    ),
    /* @__PURE__ */ jsx21("span", { className: "sr-only", children: ariaLabel })
  ] });
  if (mode === "toggle") {
    return /* @__PURE__ */ jsx21(
      Button,
      {
        variant: buttonVariant,
        size,
        type: type ?? "button",
        "aria-label": ariaLabel,
        onClick: () => setTheme(nextTheme),
        ...buttonProps,
        children: iconContent
      }
    );
  }
  return /* @__PURE__ */ jsxs10(DropdownMenu, { children: [
    /* @__PURE__ */ jsx21(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx21(
      Button,
      {
        variant: buttonVariant,
        size,
        type: type ?? "button",
        "aria-label": ariaLabel,
        ...buttonProps,
        children: iconContent
      }
    ) }),
    /* @__PURE__ */ jsx21(DropdownMenuContent, { align, children: /* @__PURE__ */ jsxs10(
      DropdownMenuRadioGroup,
      {
        value: currentTheme,
        onValueChange: (value) => setTheme(value),
        children: [
          /* @__PURE__ */ jsx21(DropdownMenuRadioItem, { value: "light", children: "Light" }),
          /* @__PURE__ */ jsx21(DropdownMenuRadioItem, { value: "dark", children: "Dark" }),
          showSystemOption ? /* @__PURE__ */ jsx21(DropdownMenuRadioItem, { value: "system", children: "System" }) : null
        ]
      }
    ) })
  ] });
}

// src/components/toast.tsx
import * as React18 from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva13 } from "class-variance-authority";
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
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
        info: "border-info bg-info text-info-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React18.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx22(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
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
var ToastClose = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxs11(
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
          /* @__PURE__ */ jsx22("path", { d: "M18 6 6 18" }),
          /* @__PURE__ */ jsx22("path", { d: "m6 6 12 12" })
        ]
      }
    )
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/components/use-toast.ts
import * as React19 from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (toast2) => toast2.id === action.toast.id ? { ...toast2, ...action.toast } : toast2
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (toast2) => toast2.id === toastId || toastId === void 0 ? {
            ...toast2,
            open: false
          } : toast2
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((toast2) => toast2.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (nextToast) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...nextToast, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) {
          dismiss();
        }
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React19.useState(memoryState);
  React19.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/toaster.tsx
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs12(ToastProvider, { children: [
    toasts.map(({ id, title, description, action, ...props }) => /* @__PURE__ */ jsxs12(Toast, { ...props, children: [
      /* @__PURE__ */ jsxs12("div", { className: "grid gap-1", children: [
        title ? /* @__PURE__ */ jsx23(ToastTitle, { children: title }) : null,
        description ? /* @__PURE__ */ jsx23(ToastDescription, { children: description }) : null
      ] }),
      action,
      /* @__PURE__ */ jsx23(ToastClose, {})
    ] }, id)),
    /* @__PURE__ */ jsx23(ToastViewport, {})
  ] });
}

// src/components/accordion.tsx
import * as React20 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItemPrimitive = AccordionPrimitive.Item;
var AccordionHeaderPrimitive = AccordionPrimitive.Header;
var AccordionTriggerPrimitive = AccordionPrimitive.Trigger;
var AccordionContentPrimitive = AccordionPrimitive.Content;
var AccordionItem = React20.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx24(AccordionItemPrimitive, { ref, className: cn("border-b", className), ...props })
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React20.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx24(AccordionHeaderPrimitive, { className: "flex", children: /* @__PURE__ */ jsxs13(
    AccordionTriggerPrimitive,
    {
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx24(
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
            children: /* @__PURE__ */ jsx24("path", { d: "m6 9 6 6 6-6" })
          }
        )
      ]
    }
  ) })
);
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React20.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx24(
    AccordionContentPrimitive,
    {
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ...props,
      children: /* @__PURE__ */ jsx24("div", { className: cn("pb-4 pt-0", className), children })
    }
  )
);
AccordionContent.displayName = "AccordionContent";

// src/components/checkbox.tsx
import * as React21 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { jsx as jsx25 } from "react/jsx-runtime";
var Checkbox = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx25(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx25(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx25("svg", { className: "h-4 w-4", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx25("path", { d: "M20 6 9 17l-5-5" }) }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/switch.tsx
import * as React22 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { jsx as jsx26 } from "react/jsx-runtime";
var Switch = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx26(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx26(
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

// src/components/radio-group.tsx
import * as React23 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle as Circle2 } from "lucide-react";
import { jsx as jsx27 } from "react/jsx-runtime";
var RadioGroup2 = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx27(RadioGroupPrimitive.Root, { ref, className: cn("grid gap-2", className), ...props }));
RadioGroup2.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx27(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx27(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx27(Circle2, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/scroll-area.tsx
import * as React24 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
var ScrollArea = React24.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs14(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx28(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx28(ScrollBar, {}),
      /* @__PURE__ */ jsx28(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React24.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx28(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx28(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/command.tsx
import * as React26 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

// src/components/dialog.tsx
import * as React25 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { jsx as jsx29, jsxs as jsxs15 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx29(
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
var DialogContent = React25.forwardRef(({ className, children, variant = "default", ...props }, ref) => /* @__PURE__ */ jsxs15(DialogPortal, { children: [
  /* @__PURE__ */ jsx29(DialogOverlay, {}),
  /* @__PURE__ */ jsxs15(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        // A modal genuinely floats, so this is one of the few level-2 surfaces.
        "fixed left-[50%] top-[50%] z-modal grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-2 duration-200 data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-out",
        variant === "default" && "border border-border bg-popover",
        "rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs15(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxs15(
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
                /* @__PURE__ */ jsx29("path", { d: "M18 6 6 18" }),
                /* @__PURE__ */ jsx29("path", { d: "m6 6 12 12" })
              ]
            }
          ),
          /* @__PURE__ */ jsx29("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx29(
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
}) => /* @__PURE__ */ jsx29(
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
var DialogTitle = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx29(
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
var DialogDescription = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx29(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/command.tsx
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
var Command = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  CommandPrimitive,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = ({ children, ...props }) => /* @__PURE__ */ jsx30(Dialog, { ...props, children: /* @__PURE__ */ jsx30(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ jsx30(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
var CommandInput = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs16("div", { className: "flex items-center border-b px-3", "data-cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx30(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx30(
    CommandPrimitive.Input,
    {
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  CommandPrimitive.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React26.forwardRef((props, ref) => /* @__PURE__ */ jsx30(CommandPrimitive.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  CommandPrimitive.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  CommandPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  CommandPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx30(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
    ...props
  }
);
CommandShortcut.displayName = "CommandShortcut";

// src/components/navigation-menu.tsx
import * as React27 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cva as cva14 } from "class-variance-authority";
import { jsx as jsx31, jsxs as jsxs17 } from "react/jsx-runtime";
var NavigationMenu = React27.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs17(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx31(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx31(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva14(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
var NavigationMenuTrigger = React27.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs17(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx31(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx31(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx31("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx31(
  NavigationMenuPrimitive.Viewport,
  {
    ref,
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx31(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx31("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// src/components/select.tsx
import * as React28 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown as ChevronDown2, ChevronUp } from "lucide-react";
import { jsx as jsx32, jsxs as jsxs18 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs18(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx32(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx32(ChevronDown2, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx32(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx32(ChevronDown2, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React28.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx32(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs18(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx32(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx32(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx32(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs18(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx32("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx32(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx32(Check2, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx32(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/tooltip.tsx
import * as React29 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx33 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React29.forwardRef(({ className, sideOffset = 4, variant = "default", ...props }, ref) => /* @__PURE__ */ jsx33(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-tooltip overflow-hidden rounded-md px-3 py-1.5 text-sm animate-fade-in",
      variant === "default" && "border border-border bg-popover text-popover-foreground shadow-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/tabs.tsx
import * as React30 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva as cva15 } from "class-variance-authority";
import { jsx as jsx34 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var tabsListVariants = cva15(
  "inline-flex items-center justify-center rounded-md p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-muted",
        ghost: "bg-transparent gap-2",
        underline: "bg-transparent gap-4 p-0 rounded-none border-b"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsList = React30.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx34(
  TabsPrimitive.List,
  {
    ref,
    className: cn(tabsListVariants({ variant }), className),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var tabsTriggerVariants = cva15(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        ghost: "rounded-sm hover:bg-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",
        // The category-tab pill (AI Apps / Web Apps), per DESIGN.md.
        pill: "rounded-pill-category data-[state=active]:bg-card data-[state=active]:text-foreground",
        underline: "rounded-none border-b-2 border-transparent pb-3 pt-2 data-[state=active]:border-brand data-[state=active]:text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsTrigger = React30.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx34(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(tabsTriggerVariants({ variant }), className),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx34(
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

// src/components/reading-progress.tsx
import { useEffect as useEffect4, useState as useState4 } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { jsx as jsx35 } from "react/jsx-runtime";
function ReadingProgress() {
  const [isVisible, setIsVisible] = useState4(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
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
  return /* @__PURE__ */ jsx35(
    motion.div,
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
import { useState as useState5, useEffect as useEffect5, useCallback as useCallback2, useRef, useMemo } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { Fragment as Fragment3, jsx as jsx36, jsxs as jsxs19 } from "react/jsx-runtime";
var EMPTY_CATEGORIES = {};
function CommandPalette({
  className,
  commands,
  categories = EMPTY_CATEGORIES,
  placeholder = "Search commands...",
  onSearch,
  triggerLabel = "Search",
  shortcutKey = "k"
}) {
  const [isOpen, setIsOpen] = useState5(false);
  const [query, setQuery] = useState5("");
  const [selectedIndex, setSelectedIndex] = useState5(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const closePalette = useCallback2(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);
  const openPalette = useCallback2(() => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, []);
  const runCommand = useCallback2(
    (command) => {
      command.action();
      closePalette();
    },
    [closePalette]
  );
  const filteredCommands = useMemo(() => {
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
  const handleKeyDown = useCallback2(
    (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === shortcutKey) {
        e.preventDefault();
        if (isOpen) {
          closePalette();
        } else {
          openPalette();
        }
        return;
      }
      if (!isOpen) return;
      switch (e.key) {
        case "Escape":
          closePalette();
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
            runCommand(filteredCommands[selectedIndex]);
          }
          break;
      }
    },
    [closePalette, filteredCommands, isOpen, openPalette, runCommand, selectedIndex, shortcutKey]
  );
  useEffect5(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  useEffect5(() => {
    setSelectedIndex(0);
  }, [filteredCommands.length]);
  useEffect5(() => {
    if (listRef.current && filteredCommands.length > 0) {
      const selectedElement = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      selectedElement?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex, filteredCommands.length]);
  const groupedCommands = useMemo(() => {
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
  return /* @__PURE__ */ jsxs19(LazyMotion, { features: domAnimation, children: [
    /* @__PURE__ */ jsxs19(
      "button",
      {
        type: "button",
        onClick: openPalette,
        className: cn(
          "flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
          "bg-muted/50 hover:bg-muted rounded-lg border border-border/50 transition-colors",
          className
        ),
        "aria-label": "Open command palette",
        children: [
          /* @__PURE__ */ jsxs19("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
            /* @__PURE__ */ jsx36("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsx36("path", { d: "m21 21-4.3-4.3" })
          ] }),
          /* @__PURE__ */ jsx36("span", { className: "hidden sm:inline", children: triggerLabel }),
          /* @__PURE__ */ jsxs19("kbd", { className: "hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium", children: [
            /* @__PURE__ */ jsx36("span", { className: "text-xs", children: "\u2318" }),
            shortcutKey.toUpperCase()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx36(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs19(Fragment3, { children: [
      /* @__PURE__ */ jsx36(
        m.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: closePalette,
          className: "fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        }
      ),
      /* @__PURE__ */ jsx36(
        m.div,
        {
          initial: { opacity: 0, scale: 0.95, y: -20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95, y: -20 },
          transition: { duration: 0.15 },
          className: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-xl z-50 px-4",
          children: /* @__PURE__ */ jsxs19("div", { className: "bg-popover border border-border rounded-xl shadow-2xl overflow-hidden", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-border", children: [
              /* @__PURE__ */ jsxs19("svg", { className: "h-5 w-5 text-muted-foreground shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
                /* @__PURE__ */ jsx36("circle", { cx: "11", cy: "11", r: "8" }),
                /* @__PURE__ */ jsx36("path", { d: "m21 21-4.3-4.3" })
              ] }),
              /* @__PURE__ */ jsx36(
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
              query && /* @__PURE__ */ jsx36(
                "button",
                {
                  type: "button",
                  onClick: () => setQuery(""),
                  className: "text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ jsx36("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx36("path", { d: "M18 6 6 18M6 6l12 12" }) })
                }
              ),
              /* @__PURE__ */ jsx36("kbd", { className: "hidden sm:inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground", children: "ESC" })
            ] }),
            /* @__PURE__ */ jsx36(
              "div",
              {
                ref: listRef,
                className: "max-h-[60vh] overflow-y-auto p-2",
                role: "listbox",
                children: filteredCommands.length === 0 ? /* @__PURE__ */ jsxs19("div", { className: "py-8 text-center text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs19("p", { children: [
                    'No results found for "',
                    query,
                    '"'
                  ] }),
                  /* @__PURE__ */ jsx36("p", { className: "text-sm mt-1", children: "Try searching for something else" })
                ] }) : Object.entries(groupedCommands).map(([category, cmds]) => {
                  if (cmds.length === 0) return null;
                  return /* @__PURE__ */ jsxs19("div", { className: "mb-2", children: [
                    /* @__PURE__ */ jsx36("div", { className: "px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: getCategoryLabel(category) }),
                    cmds.map((cmd) => {
                      globalIndex++;
                      const isSelected = globalIndex === selectedIndex;
                      return /* @__PURE__ */ jsxs19(
                        "button",
                        {
                          type: "button",
                          "data-index": globalIndex,
                          onClick: () => runCommand(cmd),
                          onMouseEnter: () => setSelectedIndex(globalIndex),
                          className: cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                            isSelected ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-muted"
                          ),
                          role: "option",
                          "aria-selected": isSelected,
                          children: [
                            cmd.icon && /* @__PURE__ */ jsx36(
                              "div",
                              {
                                className: cn(
                                  "shrink-0 p-1.5 rounded-md",
                                  isSelected ? "bg-primary/20" : "bg-muted"
                                ),
                                children: cmd.icon
                              }
                            ),
                            /* @__PURE__ */ jsxs19("div", { className: "flex-1 min-w-0", children: [
                              /* @__PURE__ */ jsx36("div", { className: "font-medium text-foreground truncate", children: cmd.title }),
                              cmd.description && /* @__PURE__ */ jsx36("div", { className: "text-sm text-muted-foreground truncate", children: cmd.description })
                            ] }),
                            isSelected && /* @__PURE__ */ jsx36("svg", { className: "h-4 w-4 shrink-0 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx36("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
                          ]
                        },
                        cmd.id
                      );
                    })
                  ] }, category);
                })
              }
            ),
            /* @__PURE__ */ jsx36("div", { className: "px-4 py-2 border-t border-border bg-muted/30", children: /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxs19("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx36("kbd", { className: "px-1.5 py-0.5 rounded border bg-muted font-mono", children: "\u2191\u2193" }),
                  "navigate"
                ] }),
                /* @__PURE__ */ jsxs19("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx36("kbd", { className: "px-1.5 py-0.5 rounded border bg-muted font-mono", children: "\u21B5" }),
                  "select"
                ] })
              ] }),
              /* @__PURE__ */ jsxs19("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx36("kbd", { className: "px-1.5 py-0.5 rounded border bg-muted font-mono", children: "esc" }),
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
import { jsx as jsx37, jsxs as jsxs20 } from "react/jsx-runtime";
function DefaultLink({ href, className, children }) {
  return /* @__PURE__ */ jsx37("a", { href, className, children });
}
function BreadcrumbNav({
  items,
  className = "",
  separator,
  linkComponent: LinkComponent = DefaultLink
}) {
  if (items.length === 0) return null;
  const defaultSeparator = /* @__PURE__ */ jsx37("svg", { className: "mx-2 h-4 w-4 text-muted-foreground", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx37("path", { d: "m9 18 6-6-6-6" }) });
  return /* @__PURE__ */ jsx37("nav", { "aria-label": "Breadcrumb", className: cn("mb-6 text-sm", className), children: /* @__PURE__ */ jsx37("ol", { className: "flex items-center space-x-2", children: items.map((item, index) => /* @__PURE__ */ jsxs20("li", { className: "flex items-center", children: [
    index > 0 && (separator || defaultSeparator),
    index === items.length - 1 ? /* @__PURE__ */ jsx37("span", { className: "font-medium text-foreground", "aria-current": "page", children: item.label }) : /* @__PURE__ */ jsx37(
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
import { motion as motion2, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { useState as useState6 } from "react";
import { Fragment as Fragment4, jsx as jsx38, jsxs as jsxs21 } from "react/jsx-runtime";
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
  const [isExpanded, setIsExpanded] = useState6(defaultExpanded);
  return /* @__PURE__ */ jsxs21(
    motion2.div,
    {
      layout: true,
      className: `group relative w-full bg-secondary/50 rounded-xl overflow-hidden flex flex-col h-full ${className}`,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.3 },
      children: [
        thumbnail && /* @__PURE__ */ jsx38(motion2.div, { layout: true, className: "relative aspect-square w-full overflow-hidden", children: thumbnail }),
        /* @__PURE__ */ jsx38(motion2.div, { layout: true, className: "p-4 flex flex-col flex-grow", children: /* @__PURE__ */ jsxs21(motion2.div, { layout: true, className: "flex flex-col gap-3 h-full", children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxs21("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx38("h3", { className: "text-lg font-semibold tracking-tight", children: title }),
              description && /* @__PURE__ */ jsx38("p", { className: "text-muted-foreground text-sm line-clamp-2", children: description })
            ] }),
            actions
          ] }),
          tags && tags.length > 0 && /* @__PURE__ */ jsx38("div", { className: "flex flex-wrap gap-1.5 mt-auto pt-3", children: tags.map((tag) => /* @__PURE__ */ jsx38(
            "span",
            {
              className: "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground",
              children: tag
            },
            tag
          )) }),
          children && /* @__PURE__ */ jsxs21(Fragment4, { children: [
            /* @__PURE__ */ jsxs21(
              "button",
              {
                onClick: () => setIsExpanded(!isExpanded),
                className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2",
                children: [
                  /* @__PURE__ */ jsx38("span", { children: isExpanded ? "Show less" : "Learn more" }),
                  /* @__PURE__ */ jsx38(
                    "svg",
                    {
                      className: `h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`,
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: /* @__PURE__ */ jsx38("path", { d: "m6 9 6 6 6-6" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx38(AnimatePresence2, { children: isExpanded && /* @__PURE__ */ jsx38(
              motion2.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3 },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsx38("div", { className: "pt-2", children })
              }
            ) })
          ] })
        ] }) })
      ]
    }
  );
}

// src/components/scroll-to-top.tsx
import { useState as useState7, useEffect as useEffect6 } from "react";
import { motion as motion3, AnimatePresence as AnimatePresence3 } from "framer-motion";
import { jsx as jsx39 } from "react/jsx-runtime";
function ScrollToTop({ threshold = 300, className = "" }) {
  const [isVisible, setIsVisible] = useState7(false);
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
  return /* @__PURE__ */ jsx39(AnimatePresence3, { children: isVisible && /* @__PURE__ */ jsx39(
    motion3.div,
    {
      initial: { opacity: 0, scale: 0.8, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.8, y: 20 },
      transition: { duration: 0.2 },
      className: `fixed bottom-8 right-8 z-40 ${className}`,
      children: /* @__PURE__ */ jsx39(
        "button",
        {
          onClick: scrollToTop,
          className: "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center",
          "aria-label": "Scroll to top",
          children: /* @__PURE__ */ jsx39("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx39("path", { d: "m18 15-6-6-6 6" }) })
        }
      )
    }
  ) });
}

// src/components/page-transition.tsx
import { motion as motion4, AnimatePresence as AnimatePresence4, useScroll as useScroll2, useTransform } from "framer-motion";
import { useRef as useRef2 } from "react";
import { jsx as jsx40 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx40(AnimatePresence4, { mode: "wait", children: /* @__PURE__ */ jsx40(
    motion4.div,
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
  return /* @__PURE__ */ jsx40(
    motion4.div,
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
  return /* @__PURE__ */ jsx40(
    motion4.div,
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
  return /* @__PURE__ */ jsx40(
    motion4.div,
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
  const ref = useRef2(null);
  const { scrollYProgress } = useScroll2({
    target: ref,
    offset: ["start end", "end start"]
  });
  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * speed * multiplier, -100 * speed * multiplier]
  );
  return /* @__PURE__ */ jsx40(motion4.div, { ref, className, style: { y }, children });
}
function ScaleOnScroll({
  children,
  className = "",
  scaleRange = [0.8, 1]
}) {
  const ref = useRef2(null);
  const { scrollYProgress } = useScroll2({
    target: ref,
    offset: ["start end", "center center"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return /* @__PURE__ */ jsx40(motion4.div, { ref, className, style: { scale, opacity }, children });
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
  return /* @__PURE__ */ jsx40(
    motion4.div,
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
import { jsx as jsx41, jsxs as jsxs22 } from "react/jsx-runtime";
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
      return /* @__PURE__ */ jsx41(
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
  error: _error,
  reset,
  title = "Something went wrong",
  description = "We encountered an unexpected error. Please try again."
}) {
  return /* @__PURE__ */ jsx41("div", { className: "flex min-h-[50vh] flex-col items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxs22("div", { className: "rounded-lg border border-border bg-card p-8 sm:p-12 max-w-md w-full text-center", children: [
    /* @__PURE__ */ jsx41("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsx41("div", { className: "rounded-full border border-border bg-muted p-4", children: /* @__PURE__ */ jsx41(
      "svg",
      {
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx41(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx41("h2", { className: "text-heading-2 mb-3", children: title }),
    /* @__PURE__ */ jsx41("p", { className: "text-body-sm text-muted-foreground mb-6", children: description }),
    /* @__PURE__ */ jsx41("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: /* @__PURE__ */ jsx41(
      "button",
      {
        onClick: reset,
        className: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 rounded-sm text-body-sm font-medium transition-colors focus-ring",
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
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  BorderSpinner,
  BreadcrumbNav,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPalette,
  CommandSeparator,
  CommandShortcut,
  Container,
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  ErrorBoundary,
  ExpandableCard,
  Heading,
  Input,
  Label,
  MaskReveal,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  PageSpinner,
  PageTransition,
  ParallaxSection,
  Progress,
  ProgressCircle,
  ProgressCircleSkeleton,
  RadioGroup2 as RadioGroup,
  RadioGroupItem,
  ReadingProgress,
  ScaleOnScroll,
  ScrollArea,
  ScrollBar,
  ScrollToTop,
  Section,
  SectionReveal,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonInput,
  SkeletonText,
  Spinner,
  StaggerContainer,
  StaggerItem,
  StatusBadge,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider,
  ThemeToggle,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  alertVariants,
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
  headingVariants,
  iconPop,
  inputVariants,
  isClient,
  isServer,
  labelVariants,
  navigationMenuTriggerStyle,
  parallaxScroll,
  photoReveal,
  reducer,
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
  toast,
  reducer as toastReducer,
  toastVariants,
  useIsClient,
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useMediaQuery,
  usePrefersDarkMode,
  usePrefersReducedMotion,
  useToast
};
