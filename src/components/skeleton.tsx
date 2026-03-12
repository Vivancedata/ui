import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

type SkeletonVariant = "default" | "shimmer" | "neu" | "circular" | "rounded";
type SkeletonShape = "default" | "circular" | "rounded";

const skeletonBaseStyles = cva("animate-pulse", {
  variants: {
    tone: {
      default: "bg-muted",
      shimmer: "shimmer",
      neu: "bg-background shadow-neu-inset-sm",
    },
    shape: {
      default: "rounded-md",
      circular: "rounded-full",
      rounded: "rounded-xl",
    },
  },
  defaultVariants: {
    tone: "default",
    shape: "default",
  },
});

function resolveSkeletonStyle(
  variant: SkeletonVariant | null | undefined,
  shape: SkeletonShape | null | undefined
) {
  if (shape) {
    return {
      tone: variant === "shimmer" || variant === "neu" ? variant : "default",
      shape,
    } as const;
  }

  if (variant === "circular" || variant === "rounded") {
    return { tone: "default", shape: variant } as const;
  }

  return {
    tone: variant === "shimmer" || variant === "neu" ? variant : "default",
    shape: "default",
  } as const;
}

function skeletonVariants({
  variant,
  shape,
  className,
}: {
  variant?: SkeletonVariant | null;
  shape?: SkeletonShape | null;
  className?: string;
} = {}) {
  const resolved = resolveSkeletonStyle(variant, shape);

  return cn(skeletonBaseStyles(resolved), className);
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  shape?: SkeletonShape;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, shape, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={skeletonVariants({ variant, shape, className })}
      {...props}
    />
  )
);
Skeleton.displayName = "Skeleton";

const SkeletonText = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { lines?: number }
>(({ className, lines = 3, variant, shape, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props}>
    {Array.from({ length: lines }, (_, index) => (
      <Skeleton
        key={`line-${index + 1}`}
        variant={variant}
        shape={shape}
        className={cn("h-4", index === lines - 1 && "w-4/5")}
      />
    ))}
  </div>
));
SkeletonText.displayName = "SkeletonText";

const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, shape, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-xl border bg-card/70 p-4 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="space-y-4">
        <Skeleton variant={variant} shape={shape} className="aspect-square w-full rounded-none" />
        <div className="space-y-2">
          <Skeleton variant={variant} shape={shape} className="h-4 w-3/4" />
          <Skeleton variant={variant} shape={shape} className="h-4 w-1/2" />
          <Skeleton variant={variant} shape={shape} className="h-16 w-full" />
          <div className="flex gap-2">
            <Skeleton variant={variant} shape="circular" className="h-6 w-16" />
            <Skeleton variant={variant} shape="circular" className="h-6 w-20" />
          </div>
        </div>
      </div>
    </div>
  )
);
SkeletonCard.displayName = "SkeletonCard";

const SkeletonInput = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)}>
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  )
);
SkeletonInput.displayName = "SkeletonInput";

const SkeletonButton = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => (
    <Skeleton ref={ref} className={cn("h-10 w-32 rounded-xl", className)} />
  )
);
SkeletonButton.displayName = "SkeletonButton";

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
      shape="circular"
      className={cn(sizeClasses[size], className)}
      {...props}
    />
  );
});
SkeletonAvatar.displayName = "SkeletonAvatar";

export {
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonInput,
  SkeletonButton,
  SkeletonAvatar,
  skeletonVariants,
};
