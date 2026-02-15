"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";

interface ExpandableCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  thumbnail?: ReactNode;
  tags?: string[];
  actions?: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
}

export function ExpandableCard({
  title,
  description,
  children,
  thumbnail,
  tags,
  actions,
  className = "",
  defaultExpanded = false,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <motion.div
      layout
      className={`group relative w-full bg-secondary/50 rounded-xl overflow-hidden flex flex-col h-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
    >
      {thumbnail && (
        <motion.div layout className="relative aspect-square w-full overflow-hidden">
          {thumbnail}
        </motion.div>
      )}

      <motion.div layout className="p-4 flex flex-col flex-grow">
        <motion.div layout className="flex flex-col gap-3 h-full">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              {description && (
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {description}
                </p>
              )}
            </div>
            {actions}
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {children && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2"
              >
                <span>{isExpanded ? "Show less" : "Learn more"}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2">{children}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
