import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const skeletonVariants = cva("animate-pulse rounded-md bg-muted", {
  variants: {
    variant: {
      default: "bg-muted",
      shimmer: "shimmer",
      neu: "shadow-neu-inset-sm bg-background",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  )
);
Skeleton.displayName = "Skeleton";

// Pre-built skeleton patterns
const SkeletonText = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { lines?: number }
>(({ className, lines = 3, variant, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant={variant}
        className={cn("h-4", i === lines - 1 && "w-4/5")}
      />
    ))}
  </div>
));
SkeletonText.displayName = "SkeletonText";

const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border p-4 space-y-4", className)}
      {...props}
    >
      <Skeleton variant={variant} className="h-32 w-full" />
      <div className="space-y-2">
        <Skeleton variant={variant} className="h-4 w-3/4" />
        <Skeleton variant={variant} className="h-4 w-1/2" />
      </div>
    </div>
  )
);
SkeletonCard.displayName = "SkeletonCard";

const SkeletonAvatar = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { size?: "sm" | "default" | "lg" }
>(({ className, size = "default", variant, ...props }, ref) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-14 w-14",
  };

  return (
    <Skeleton
      ref={ref}
      variant={variant}
      className={cn("rounded-full", sizeClasses[size], className)}
      {...props}
    />
  );
});
SkeletonAvatar.displayName = "SkeletonAvatar";

export { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar, skeletonVariants };
