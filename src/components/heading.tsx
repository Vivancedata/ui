import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// Weight is 600, never bold(700) -- the type scale carries its own weight and
// tracking, so this only sets colour and balance.
const headingVariants = cva("text-balance", {
  variants: {
    level: {
      "display-xl": "text-display-xl",
      display: "text-display",
      h1: "text-heading-1",
      h2: "text-heading-2",
      h3: "text-heading-3",
      h4: "text-heading-4",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-brand",
    },
  },
  defaultVariants: {
    level: "h1",
    variant: "default",
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, variant, as, children, ...props }, ref) => {
    // Map level to semantic HTML element
    const Component: HeadingLevel =
      as ||
      (level === "display" || level === "display-xl"
        ? "h1"
        : (level as HeadingLevel) || "h1");

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
