import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/**
 * Buttons split by context, and the split is a deliberate signal of which
 * surface you are on: marketing CTAs are pills, app and nav chrome is a tight
 * 6px square. Do not mix the two shapes within one context.
 *
 * `shape` defaults to "square" because the overwhelming majority of call sites
 * are app chrome; marketing CTAs opt in with shape="pill".
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Ink fill. Inverts to a light pill in dark mode via the token.
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // The hairline is the whole treatment -- no backdrop blur, no lift.
        outline:
          "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        // The white (or near-black, in dark) pill counterpart to `default`.
        secondary:
          "border border-border bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Links carry the brand green, not ink.
        link: "text-brand underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground hover:bg-success/90",
      },
      shape: {
        square: "rounded-sm",
        pill: "rounded-pill",
      },
      size: {
        default: "h-10 px-4 text-body-sm",
        sm: "h-8 px-3 text-caption",
        lg: "h-11 px-6 text-body",
        xl: "h-12 px-8 text-body",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "square",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      shape,
      size,
      asChild = false,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const content = isLoading ? (
      <>
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Loading...
      </>
    ) : (
      children
    );

    if (asChild) {
      const SlotComponent = Slot as unknown as React.ElementType;

      return (
        <SlotComponent
          className={cn(buttonVariants({ variant, shape, size, className }))}
          ref={ref}
          aria-busy={isLoading || undefined}
          aria-disabled={disabled || isLoading || undefined}
          data-disabled={disabled || isLoading ? "" : undefined}
          {...props}
        >
          {content}
        </SlotComponent>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, shape, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
