"use client";

import * as React from "react";
import { cn } from "../lib/utils";

export interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation variant */
  variant?: "hover-lift" | "hover-glow" | "hover-tilt" | "hover-border";
  /** Card background variant */
  background?: "default" | "glass" | "neu";
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, variant = "hover-lift", background = "default", children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || variant !== "hover-tilt") return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    const tiltStyle =
      variant === "hover-tilt"
        ? {
            transform: `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg)`,
            transition: "transform 0.1s ease-out",
          }
        : {};

    return (
      <div
        ref={(node) => {
          (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
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
        )}
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AnimatedCard.displayName = "AnimatedCard";

export { AnimatedCard };
