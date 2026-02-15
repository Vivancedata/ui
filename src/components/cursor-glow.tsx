"use client";

import { useEffect, useState, RefObject } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsClient } from "../hooks/use-is-client";

interface CursorGlowProps {
  size?: number;
  opacity?: number;
  color?: string;
  containerRef?: RefObject<HTMLElement | null>;
  className?: string;
  zIndex?: number;
}

function checkIsMobile(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(hover: none)").matches;
}

function checkPrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CursorGlow({
  size = 600,
  opacity = 0.15,
  color = "hsl(var(--primary))",
  containerRef,
  className = "",
  zIndex = 0,
}: CursorGlowProps) {
  const isClient = useIsClient();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const isMobile = !isClient || checkIsMobile();
  const prefersReducedMotion = isClient && checkPrefersReducedMotion();

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const container = containerRef?.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const isInside =
          x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

        setIsVisible(isInside);

        if (isInside) {
          mouseX.set(x);
          mouseY.set(y);
        }
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      if (!container) {
        setIsVisible(true);
      }
    };

    const target = container || document;
    target.addEventListener("mousemove", handleMouseMove as EventListener);

    if (container) {
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseenter", handleMouseEnter);
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener);
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseenter", handleMouseEnter);
      } else {
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [isMobile, prefersReducedMotion, mouseX, mouseY, containerRef]);

  if (isMobile || prefersReducedMotion) return null;

  const isScoped = !!containerRef;

  return (
    <motion.div
      className={`pointer-events-none ${isScoped ? "absolute" : "fixed"} inset-0 overflow-hidden ${className}`}
      style={{ zIndex }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
          opacity,
        }}
      />
    </motion.div>
  );
}

interface GradientCursorGlowProps {
  size?: number;
  opacity?: number;
  primaryColor?: string;
  secondaryColor?: string;
  containerRef?: RefObject<HTMLElement | null>;
  zIndex?: number;
}

export function GradientCursorGlow({
  size = 800,
  opacity = 0.12,
  primaryColor = "rgba(100, 200, 100, 0.4)",
  secondaryColor = "rgba(59, 130, 246, 0.2)",
  containerRef,
  zIndex = 0,
}: GradientCursorGlowProps) {
  const isClient = useIsClient();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const isMobile = !isClient || checkIsMobile();
  const prefersReducedMotion = isClient && checkPrefersReducedMotion();

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const container = containerRef?.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const isInside =
          x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

        setIsVisible(isInside);

        if (isInside) {
          mouseX.set(x);
          mouseY.set(y);
        }
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (!container) setIsVisible(true);
    };

    const target = container || document;
    target.addEventListener("mousemove", handleMouseMove as EventListener);

    if (container) {
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseenter", handleMouseEnter);
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener);
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseenter", handleMouseEnter);
      } else {
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [isMobile, prefersReducedMotion, mouseX, mouseY, containerRef]);

  if (isMobile || prefersReducedMotion) return null;

  const isScoped = !!containerRef;

  return (
    <motion.div
      className={`pointer-events-none ${isScoped ? "absolute" : "fixed"} inset-0 overflow-hidden`}
      style={{ zIndex }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: size,
          height: size,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle at center, ${primaryColor} 0%, transparent 60%)`,
          opacity,
        }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          x: springX,
          y: springY,
          translateX: "-30%",
          translateY: "-30%",
          background: `radial-gradient(circle at center, ${secondaryColor} 0%, transparent 60%)`,
          opacity: opacity * 0.8,
        }}
      />
    </motion.div>
  );
}
