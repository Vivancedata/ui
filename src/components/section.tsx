import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "",
      gradient: "gradient-vivance",
      muted: "bg-muted/50",
      card: "bg-card rounded-lg border",
      glass: "glass rounded-lg",
    },
    padding: {
      none: "",
      sm: "py-8 md:py-12",
      default: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-24 md:py-32",
    },
    container: {
      none: "",
      default: "[&>*]:mx-auto [&>*]:max-w-7xl [&>*]:px-4 sm:[&>*]:px-6 lg:[&>*]:px-8",
      narrow: "[&>*]:mx-auto [&>*]:max-w-4xl [&>*]:px-4 sm:[&>*]:px-6 lg:[&>*]:px-8",
      wide: "[&>*]:mx-auto [&>*]:max-w-screen-2xl [&>*]:px-4 sm:[&>*]:px-6 lg:[&>*]:px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
    container: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "article" | "aside";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, padding, container, as: Component = "section", ...props }, ref) => (
    <Component
      ref={ref as any}
      className={cn(sectionVariants({ variant, padding, container }), className)}
      {...props}
    />
  )
);
Section.displayName = "Section";

export { Section, sectionVariants };
