import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// Body copy counterpart to Heading: sizes come from the DESIGN.md type ladder,
// colour from the ink pair. Muted is the default because most running prose
// sits under a foreground-coloured heading; pass variant="default" for body
// text that must carry full contrast on its own.
const paragraphVariants = cva("", {
  variants: {
    size: {
      lg: "text-body-lg",
      default: "text-body",
      sm: "text-body-sm",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "muted",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, variant, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(paragraphVariants({ size, variant }), className)}
      {...props}
    />
  )
);
Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
