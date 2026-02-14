import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const glassCardVariants = cva(
  "rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "glass",
        frosted: "glass backdrop-blur-xl",
        tinted:
          "glass bg-primary/5 dark:bg-primary/10",
        bordered:
          "glass border-2 border-primary/20",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-2 hover:shadow-lg",
        glow: "hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]",
        scale: "hover:scale-[1.02]",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
      padding: "default",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  /** Optional gradient overlay */
  gradient?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, hover, padding, gradient, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        glassCardVariants({ variant, hover, padding }),
        gradient && "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };
