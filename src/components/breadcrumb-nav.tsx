"use client";

import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: ReactNode;
  linkComponent?: React.ComponentType<{ href: string; className?: string; children: ReactNode }>;
}

function DefaultLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function BreadcrumbNav({
  items,
  className = "",
  separator,
  linkComponent: LinkComponent = DefaultLink,
}: BreadcrumbNavProps) {
  if (items.length === 0) return null;

  const defaultSeparator = (
    <svg className="mx-2 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6 text-sm", className)}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (separator || defaultSeparator)}

            {index === items.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            ) : (
              <LinkComponent
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </LinkComponent>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
