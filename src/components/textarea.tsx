import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-sm text-body-sm ring-offset-background placeholder:text-faint focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-fast resize-none",
  {
    variants: {
      variant: {
        default:
          "border border-input bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "border-0 bg-transparent focus-visible:bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant }), "px-3 py-2", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
