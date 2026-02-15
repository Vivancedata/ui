"use client";

import { useRef, ReactNode } from "react";
import { CursorGlow, GradientCursorGlow } from "./cursor-glow";

interface GlowSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gradient";
  size?: number;
  opacity?: number;
  color?: string;
  primaryColor?: string;
  secondaryColor?: string;
  enabled?: boolean;
  as?: "section" | "div" | "article" | "main" | "header" | "footer";
}

export function GlowSection({
  children,
  className = "",
  variant = "default",
  size,
  opacity,
  color,
  primaryColor,
  secondaryColor,
  enabled = true,
  as: Component = "section",
}: GlowSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Component className={`relative ${className}`}>
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {enabled && variant === "default" && (
          <CursorGlow
            containerRef={containerRef}
            size={size}
            opacity={opacity}
            color={color}
          />
        )}
        {enabled && variant === "gradient" && (
          <GradientCursorGlow
            containerRef={containerRef}
            size={size}
            opacity={opacity}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        )}
      </div>
      {children}
    </Component>
  );
}

interface HeroGlowSectionProps {
  children: ReactNode;
  className?: string;
}

export function HeroGlowSection({ children, className = "" }: HeroGlowSectionProps) {
  return (
    <GlowSection
      className={className}
      variant="default"
      size={700}
      opacity={0.18}
      color="hsl(var(--primary))"
    >
      {children}
    </GlowSection>
  );
}

interface SubtleGlowSectionProps {
  children: ReactNode;
  className?: string;
}

export function SubtleGlowSection({ children, className = "" }: SubtleGlowSectionProps) {
  return (
    <GlowSection
      className={className}
      variant="default"
      size={500}
      opacity={0.1}
      color="hsl(var(--primary))"
    >
      {children}
    </GlowSection>
  );
}
