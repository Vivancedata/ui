"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItemPrimitive = AccordionPrimitive.Item as unknown as React.ElementType;
const AccordionHeaderPrimitive = AccordionPrimitive.Header as unknown as React.ElementType;
const AccordionTriggerPrimitive = AccordionPrimitive.Trigger as unknown as React.ElementType;
const AccordionContentPrimitive = AccordionPrimitive.Content as unknown as React.ElementType;

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <AccordionItemPrimitive ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionHeaderPrimitive className="flex">
      <AccordionTriggerPrimitive
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </AccordionTriggerPrimitive>
    </AccordionHeaderPrimitive>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  forceMount?: true;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionContentPrimitive
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionContentPrimitive>
  )
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
