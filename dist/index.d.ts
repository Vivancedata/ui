import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { ReactNode, RefObject, Component } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TabsPrimitive from '@radix-ui/react-tabs';

/**
 * Merge class names with Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
declare function cn(...inputs: ClassValue[]): string;
/**
 * Format a number as currency
 */
declare function formatCurrency(amount: number, currency?: string, locale?: string): string;
/**
 * Format a date relative to now (e.g., "2 days ago")
 */
declare function formatRelativeTime(date: Date, locale?: string): string;
/**
 * Generate a random ID
 */
declare function generateId(prefix?: string): string;
/**
 * Debounce a function
 */
declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Check if code is running on the client
 */
declare const isClient: boolean;
/**
 * Check if code is running on the server
 */
declare const isServer: boolean;

declare const fadeInUp: {
    initial: {
        y: number;
        opacity: number;
    };
    animate: {
        y: number;
        opacity: number;
        transition: {
            duration: number;
            ease: [number, number, number, number];
        };
    };
};
declare const fadeIn: {
    initial: {
        opacity: number;
    };
    animate: {
        opacity: number;
        transition: {
            duration: number;
            ease: "easeInOut";
        };
    };
};
declare const scaleUp: {
    initial: {
        scale: number;
        opacity: number;
    };
    animate: {
        scale: number;
        opacity: number;
        transition: {
            duration: number;
            ease: [number, number, number, number];
        };
    };
};
declare const slideIn: {
    initial: {
        x: number;
        opacity: number;
    };
    animate: {
        x: number;
        opacity: number;
        transition: {
            duration: number;
            ease: "easeOut";
        };
    };
};
declare const fadeInScale: {
    initial: {
        opacity: number;
        scale: number;
    };
    animate: {
        opacity: number;
        scale: number;
        transition: {
            duration: number;
            ease: "easeOut";
        };
    };
};
declare const slideInLeft: {
    initial: {
        opacity: number;
        x: number;
    };
    animate: {
        opacity: number;
        x: number;
        transition: {
            duration: number;
            ease: "easeOut";
        };
    };
};
declare const slideInRight: {
    initial: {
        opacity: number;
        x: number;
    };
    animate: {
        opacity: number;
        x: number;
        transition: {
            duration: number;
            ease: "easeOut";
        };
    };
};
declare const stagger: {
    animate: {
        transition: {
            staggerChildren: number;
        };
    };
};
declare const staggerContainer: {
    initial: {};
    animate: {
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
};
declare const staggerItem: {
    initial: {
        opacity: number;
        y: number;
    };
    animate: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            ease: "easeOut";
        };
    };
};
declare const staggerContainerVariants: {
    hidden: {
        opacity: number;
    };
    visible: {
        opacity: number;
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
};
declare const staggerItemVariants: {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
        };
    };
};
declare const showContainerVariants: {
    hidden: {
        opacity: number;
    };
    show: {
        opacity: number;
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
};
declare const showItemVariants: {
    hidden: {
        opacity: number;
        y: number;
    };
    show: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
        };
    };
};
declare const showItemSpringVariants: {
    hidden: {
        opacity: number;
        y: number;
    };
    show: {
        opacity: number;
        y: number;
        transition: {
            type: "spring";
            stiffness: number;
            damping: number;
        };
    };
};
declare const photoReveal: {
    hidden: {
        scale: number;
        opacity: number;
    };
    visible: {
        scale: number;
        opacity: number;
        transition: {
            type: "spring";
            stiffness: number;
            damping: number;
        };
    };
};
declare const iconPop: {
    hidden: {
        scale: number;
        opacity: number;
    };
    visible: (i: number) => {
        scale: number;
        opacity: number;
        transition: {
            type: "spring";
            stiffness: number;
            damping: number;
            delay: number;
        };
    };
};
declare const parallaxScroll: (yOffset?: number) => {
    initial: {
        y: number;
    };
    animate: {
        y: number;
        transition: {
            type: "spring";
            stiffness: number;
            damping: number;
            mass: number;
        };
    };
};
declare const springGentle: {
    type: "spring";
    stiffness: number;
    damping: number;
};
declare const springSnappy: {
    type: "spring";
    stiffness: number;
    damping: number;
};
declare const springBouncy: {
    type: "spring";
    stiffness: number;
    damping: number;
};

/**
 * Hook to detect if a media query matches
 * @param query - CSS media query string
 * @returns boolean indicating if the query matches
 */
declare function useMediaQuery(query: string): boolean;
declare function useIsMobile(): boolean;
declare function useIsTablet(): boolean;
declare function useIsDesktop(): boolean;
declare function usePrefersDarkMode(): boolean;
declare function usePrefersReducedMotion(): boolean;

declare function useIsClient(): boolean;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "neu" | "neu-primary" | "glass" | "glow" | "primary" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const cardVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "neu" | "glass" | "neu-inset" | "elevated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React$1.ForwardRefExoticComponent<CardProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "neu" | "glass" | "success" | "warning" | "info" | "success-muted" | "warning-muted" | "info-muted" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    /** Optional icon to display before the text */
    icon?: React$1.ReactNode;
}
declare function Badge({ className, variant, size, icon, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const inputVariants: (props?: ({
    variant?: "default" | "ghost" | "neu" | "glass" | null | undefined;
    inputSize?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    /** Icon to display at the start of the input */
    startIcon?: React$1.ReactNode;
    /** Icon to display at the end of the input */
    endIcon?: React$1.ReactNode;
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare const textareaVariants: (props?: ({
    variant?: "default" | "ghost" | "neu" | "glass" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TextareaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const labelVariants: (props?: ({
    variant?: "default" | "muted" | "error" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "muted" | "error" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

declare const glassCardVariants: (props?: ({
    variant?: "default" | "frosted" | "tinted" | "bordered" | null | undefined;
    hover?: "glow" | "none" | "scale" | "lift" | null | undefined;
    padding?: "default" | "sm" | "lg" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface GlassCardProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof glassCardVariants> {
    /** Optional gradient overlay */
    gradient?: boolean;
}
declare const GlassCard: React$1.ForwardRefExoticComponent<GlassCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface AnimatedCardProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Animation variant */
    variant?: "hover-lift" | "hover-glow" | "hover-tilt" | "hover-border";
    /** Card background variant */
    background?: "default" | "glass" | "neu";
}
declare const AnimatedCard: React$1.ForwardRefExoticComponent<AnimatedCardProps & React$1.RefAttributes<HTMLDivElement>>;

declare const skeletonVariants: (props?: ({
    variant?: "default" | "neu" | "shimmer" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SkeletonProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
}
declare const Skeleton: React$1.ForwardRefExoticComponent<SkeletonProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonText: React$1.ForwardRefExoticComponent<SkeletonProps & {
    lines?: number;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonCard: React$1.ForwardRefExoticComponent<SkeletonProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonAvatar: React$1.ForwardRefExoticComponent<SkeletonProps & {
    size?: "sm" | "default" | "lg";
} & React$1.RefAttributes<HTMLDivElement>>;

declare const avatarVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | "xs" | null | undefined;
    variant?: "default" | "neu" | "ring" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
}
declare const Avatar: React$1.ForwardRefExoticComponent<AvatarProps & React$1.RefAttributes<HTMLDivElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<React$1.ImgHTMLAttributes<HTMLImageElement> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

interface SeparatorProps extends React$1.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
}
declare const Separator: React$1.ForwardRefExoticComponent<SeparatorProps & React$1.RefAttributes<HTMLDivElement>>;

declare const sectionVariants: (props?: ({
    variant?: "default" | "glass" | "muted" | "gradient" | "card" | null | undefined;
    padding?: "default" | "sm" | "lg" | "xl" | "none" | null | undefined;
    container?: "default" | "none" | "narrow" | "wide" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SectionProps extends React$1.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
    as?: "section" | "div" | "article" | "aside";
}
declare const Section: React$1.ForwardRefExoticComponent<SectionProps & React$1.RefAttributes<HTMLElement>>;

declare const headingVariants: (props?: ({
    level?: "h3" | "h2" | "h1" | "h4" | "display" | null | undefined;
    variant?: "default" | "muted" | "gradient" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React$1.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    as?: HeadingLevel;
}
declare const Heading: React$1.ForwardRefExoticComponent<HeadingProps & React$1.RefAttributes<HTMLHeadingElement>>;

declare const containerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined;
    padding?: "default" | "none" | "loose" | "tight" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ContainerProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
}
declare const Container: React$1.ForwardRefExoticComponent<ContainerProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "default" | "glass" | "neu";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "default" | "glass" | "neu";
} & React$1.RefAttributes<HTMLDivElement>>;

declare const ToastProvider: React$1.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React$1.RefAttributes<HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const toastVariants: (props?: ({
    variant?: "default" | "destructive" | "neu" | "glass" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Toast: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | "neu" | "glass" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type ToastProps = React$1.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React$1.ReactElement<typeof ToastAction>;

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "ghost" | "neu" | "glass" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "ghost" | "neu" | "glass" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const tabsTriggerVariants: (props?: ({
    variant?: "default" | "ghost" | "neu" | "glass" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "ghost" | "neu" | "glass" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    as?: "button" | "div" | "a";
    onClick?: () => void;
    href?: string;
}
declare function MagneticButton({ children, className, strength, as: Component, onClick, href, }: MagneticButtonProps): react_jsx_runtime.JSX.Element;
interface RippleButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}
declare function RippleButton({ children, className, onClick, disabled }: RippleButtonProps): react_jsx_runtime.JSX.Element;
interface GlowButtonProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
    onClick?: () => void;
}
declare function GlowButton({ children, className, glowColor, onClick }: GlowButtonProps): react_jsx_runtime.JSX.Element;
interface BorderBeamButtonProps {
    children: ReactNode;
    className?: string;
    borderColor?: string;
    onClick?: () => void;
}
declare function BorderBeamButton({ children, className, borderColor, onClick }: BorderBeamButtonProps): react_jsx_runtime.JSX.Element;

interface CursorGlowProps {
    size?: number;
    opacity?: number;
    color?: string;
    containerRef?: RefObject<HTMLElement | null>;
    className?: string;
    zIndex?: number;
}
declare function CursorGlow({ size, opacity, color, containerRef, className, zIndex, }: CursorGlowProps): react_jsx_runtime.JSX.Element | null;
interface GradientCursorGlowProps {
    size?: number;
    opacity?: number;
    primaryColor?: string;
    secondaryColor?: string;
    containerRef?: RefObject<HTMLElement | null>;
    zIndex?: number;
}
declare function GradientCursorGlow({ size, opacity, primaryColor, secondaryColor, containerRef, zIndex, }: GradientCursorGlowProps): react_jsx_runtime.JSX.Element | null;

interface CursorFollowerProps {
    size?: number;
    color?: string;
    mixBlendMode?: "normal" | "difference" | "multiply" | "screen" | "overlay";
}
declare function CursorFollower({ size, color, mixBlendMode, }: CursorFollowerProps): react_jsx_runtime.JSX.Element | null;
interface SpotlightCursorProps {
    size?: number;
    opacity?: number;
    color?: string;
}
declare function SpotlightCursor({ size, opacity, color, }: SpotlightCursorProps): react_jsx_runtime.JSX.Element | null;
interface TrailCursorProps {
    dotCount?: number;
    dotSize?: number;
    color?: string;
}
declare function TrailCursor({ dotCount, dotSize, color, }: TrailCursorProps): react_jsx_runtime.JSX.Element | null;

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
declare function GlowSection({ children, className, variant, size, opacity, color, primaryColor, secondaryColor, enabled, as: Component, }: GlowSectionProps): react_jsx_runtime.JSX.Element;
interface HeroGlowSectionProps {
    children: ReactNode;
    className?: string;
}
declare function HeroGlowSection({ children, className }: HeroGlowSectionProps): react_jsx_runtime.JSX.Element;
interface SubtleGlowSectionProps {
    children: ReactNode;
    className?: string;
}
declare function SubtleGlowSection({ children, className }: SubtleGlowSectionProps): react_jsx_runtime.JSX.Element;

interface AnimatedHeadingProps {
    children: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    once?: boolean;
    staggerDelay?: number;
}
declare function AnimatedHeading({ children, as: Component, className, once, staggerDelay, }: AnimatedHeadingProps): react_jsx_runtime.JSX.Element;
interface GradientTextProps {
    children: ReactNode;
    className?: string;
}
declare function GradientText({ children, className, }: GradientTextProps): react_jsx_runtime.JSX.Element;

interface FloatingElementProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    distance?: number;
    delay?: number;
}
declare function FloatingElement({ children, className, duration, distance, delay, }: FloatingElementProps): react_jsx_runtime.JSX.Element;
interface RotatingElementProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    direction?: "cw" | "ccw";
}
declare function RotatingElement({ children, className, duration, direction, }: RotatingElementProps): react_jsx_runtime.JSX.Element;
interface PulsingElementProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    scale?: number;
}
declare function PulsingElement({ children, className, duration, scale, }: PulsingElementProps): react_jsx_runtime.JSX.Element;
interface OrbitElementProps {
    children: ReactNode;
    className?: string;
    radius?: number;
    duration?: number;
    delay?: number;
    direction?: "cw" | "ccw";
}
declare function OrbitElement({ children, className, radius, duration, delay, direction, }: OrbitElementProps): react_jsx_runtime.JSX.Element;
interface AnimatedBlobProps {
    className?: string;
    color?: string;
    size?: number;
}
declare function AnimatedBlob({ className, color, size, }: AnimatedBlobProps): react_jsx_runtime.JSX.Element;
interface AnimatedGridProps {
    className?: string;
    gridSize?: number;
    color?: string;
}
declare function AnimatedGrid({ className, gridSize, color, }: AnimatedGridProps): react_jsx_runtime.JSX.Element;
interface AnimatedShapesProps {
    className?: string;
    count?: number;
}
declare function AnimatedShapes({ className, count, }: AnimatedShapesProps): react_jsx_runtime.JSX.Element;
interface ParticlesBackgroundProps {
    className?: string;
    particleCount?: number;
    color?: string;
}
declare function ParticlesBackground({ className, particleCount, color, }: ParticlesBackgroundProps): react_jsx_runtime.JSX.Element;
interface WaveAnimationProps {
    className?: string;
    color?: string;
    amplitude?: number;
    frequency?: number;
}
declare function WaveAnimation({ className, color, amplitude, frequency, }: WaveAnimationProps): react_jsx_runtime.JSX.Element;

interface ParallaxScrollProps {
    images: string[];
    className?: string;
    renderImage?: (src: string, index: number) => ReactNode;
}
declare const ParallaxScroll: React$1.MemoExoticComponent<({ images, className, renderImage, }: ParallaxScrollProps) => react_jsx_runtime.JSX.Element>;

declare function ReadingProgress(): react_jsx_runtime.JSX.Element;

interface CommandItem {
    id: string;
    title: string;
    description?: string;
    icon?: ReactNode;
    category: string;
    action: () => void;
    keywords?: string[];
}
interface CommandPaletteProps {
    className?: string;
    commands: CommandItem[];
    categories?: Record<string, string>;
    placeholder?: string;
    onSearch?: (query: string) => CommandItem[];
    triggerLabel?: string;
    shortcutKey?: string;
}
declare function CommandPalette({ className, commands, categories, placeholder, onSearch, triggerLabel, shortcutKey, }: CommandPaletteProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: string;
    href: string;
}
interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
    className?: string;
    separator?: ReactNode;
    linkComponent?: React.ComponentType<{
        href: string;
        className?: string;
        children: ReactNode;
    }>;
}
declare function BreadcrumbNav({ items, className, separator, linkComponent: LinkComponent, }: BreadcrumbNavProps): react_jsx_runtime.JSX.Element | null;

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
declare function ExpandableCard({ title, description, children, thumbnail, tags, actions, className, defaultExpanded, }: ExpandableCardProps): react_jsx_runtime.JSX.Element;

interface ScrollToTopProps {
    threshold?: number;
    className?: string;
}
declare function ScrollToTop({ threshold, className }: ScrollToTopProps): react_jsx_runtime.JSX.Element;

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
    variant?: "fade" | "slide" | "scale" | "slideUp" | "clipReveal";
    transitionKey: string;
}
declare function PageTransition({ children, className, variant, transitionKey, }: PageTransitionProps): react_jsx_runtime.JSX.Element;
interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    once?: boolean;
}
declare function SectionReveal({ children, className, delay, direction, once, }: SectionRevealProps): react_jsx_runtime.JSX.Element;
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
    once?: boolean;
}
declare function StaggerContainer({ children, className, staggerDelay, delayChildren, once, }: StaggerContainerProps): react_jsx_runtime.JSX.Element;
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}
declare function StaggerItem({ children, className }: StaggerItemProps): react_jsx_runtime.JSX.Element;
interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    direction?: "up" | "down";
}
declare function ParallaxSection({ children, className, speed, direction, }: ParallaxSectionProps): react_jsx_runtime.JSX.Element;
interface ScaleOnScrollProps {
    children: ReactNode;
    className?: string;
    scaleRange?: [number, number];
}
declare function ScaleOnScroll({ children, className, scaleRange, }: ScaleOnScrollProps): react_jsx_runtime.JSX.Element;
interface MaskRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
}
declare function MaskReveal({ children, className, direction, delay, }: MaskRevealProps): react_jsx_runtime.JSX.Element;

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    resetErrorBoundary: () => void;
    render(): ReactNode;
}
interface DefaultErrorFallbackProps {
    error: Error;
    reset: () => void;
    title?: string;
    description?: string;
}
declare function DefaultErrorFallback({ error, reset, title, description, }: DefaultErrorFallbackProps): ReactNode;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AnimatedBlob, AnimatedCard, type AnimatedCardProps, AnimatedGrid, AnimatedHeading, AnimatedShapes, Avatar, AvatarFallback, AvatarImage, type AvatarProps, Badge, type BadgeProps, BorderBeamButton, BreadcrumbNav, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, Checkbox, type CommandItem, CommandPalette, Container, type ContainerProps, CursorFollower, CursorGlow, DefaultErrorFallback, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, ErrorBoundary, ExpandableCard, FloatingElement, GlassCard, type GlassCardProps, GlowButton, GlowSection, GradientCursorGlow, GradientText, Heading, type HeadingProps, HeroGlowSection, Input, type InputProps, Label, MagneticButton, MaskReveal, OrbitElement, PageTransition, ParallaxScroll, ParallaxSection, ParticlesBackground, PulsingElement, ReadingProgress, RippleButton, RotatingElement, ScaleOnScroll, ScrollToTop, Section, type SectionProps, SectionReveal, Separator, type SeparatorProps, Skeleton, SkeletonAvatar, SkeletonCard, type SkeletonProps, SkeletonText, SpotlightCursor, StaggerContainer, StaggerItem, SubtleGlowSection, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TrailCursor, WaveAnimation, avatarVariants, badgeVariants, buttonVariants, cardVariants, cn, containerVariants, debounce, fadeIn, fadeInScale, fadeInUp, formatCurrency, formatRelativeTime, generateId, glassCardVariants, headingVariants, iconPop, inputVariants, isClient, isServer, labelVariants, parallaxScroll, photoReveal, scaleUp, sectionVariants, showContainerVariants, showItemSpringVariants, showItemVariants, skeletonVariants, slideIn, slideInLeft, slideInRight, springBouncy, springGentle, springSnappy, stagger, staggerContainer, staggerContainerVariants, staggerItem, staggerItemVariants, tabsListVariants, tabsTriggerVariants, textareaVariants, toastVariants, useIsClient, useIsDesktop, useIsMobile, useIsTablet, useMediaQuery, usePrefersDarkMode, usePrefersReducedMotion };
