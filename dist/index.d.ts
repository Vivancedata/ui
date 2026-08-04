import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { ReactNode, Component } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import { ThemeProviderProps } from 'next-themes';
export { ThemeProviderProps } from 'next-themes';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
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
declare function debounce<TArgs extends unknown[]>(func: (...args: TArgs) => void, wait: number): (...args: TArgs) => void;
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

/**
 * Buttons split by context, and the split is a deliberate signal of which
 * surface you are on: marketing CTAs are pills, app and nav chrome is a tight
 * 6px square. Do not mix the two shapes within one context.
 *
 * `shape` defaults to "square" because the overwhelming majority of call sites
 * are app chrome; marketing CTAs opt in with shape="pill".
 */
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "success" | null | undefined;
    shape?: "square" | "pill" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * The workhorse grid tile. Depth is a 1px hairline and nothing else -- the
 * default variant carries no shadow at all, which is the point of the system.
 */
declare const cardVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "raised" | "elevated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React$1.ForwardRefExoticComponent<CardProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
type CardTitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface CardTitleProps extends React$1.HTMLAttributes<HTMLHeadingElement> {
    as?: CardTitleLevel;
}
declare const CardTitle: React$1.ForwardRefExoticComponent<CardTitleProps & React$1.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | "info" | "success-muted" | "warning-muted" | "info-muted" | "brand" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    /** Optional icon to display before the text */
    icon?: React$1.ReactNode;
}
declare function Badge({ className, variant, size, icon, children, ...props }: BadgeProps): React$1.JSX.Element;

declare const inputVariants: (props?: ({
    variant?: "default" | "ghost" | null | undefined;
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
    variant?: "default" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TextareaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const labelVariants: (props?: ({
    variant?: "default" | "error" | "muted" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LabelProps extends React$1.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {
}
declare const Label: React$1.ForwardRefExoticComponent<LabelProps & React$1.RefAttributes<HTMLLabelElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
}
declare const Alert: React$1.ForwardRefExoticComponent<AlertProps & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React$1.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

type SkeletonVariant = "default" | "shimmer" | "circular" | "rounded";
type SkeletonShape = "default" | "circular" | "rounded";
declare function skeletonVariants({ variant, shape, className, }?: {
    variant?: SkeletonVariant | null;
    shape?: SkeletonShape | null;
    className?: string;
}): string;
interface SkeletonProps extends React$1.HTMLAttributes<HTMLDivElement> {
    variant?: SkeletonVariant;
    shape?: SkeletonShape;
}
declare const Skeleton: React$1.ForwardRefExoticComponent<SkeletonProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonText: React$1.ForwardRefExoticComponent<SkeletonProps & {
    lines?: number;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonCard: React$1.ForwardRefExoticComponent<SkeletonProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonInput: React$1.ForwardRefExoticComponent<{
    className?: string;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonButton: React$1.ForwardRefExoticComponent<{
    className?: string;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const SkeletonAvatar: React$1.ForwardRefExoticComponent<SkeletonProps & {
    size?: "sm" | "default" | "lg";
} & React$1.RefAttributes<HTMLDivElement>>;

declare const avatarVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | "xs" | null | undefined;
    variant?: "default" | "ring" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends React$1.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {
}
declare const Avatar: React$1.ForwardRefExoticComponent<AvatarProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & CarouselProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React$1.ForwardRefExoticComponent<Omit<ButtonProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React$1.ForwardRefExoticComponent<Omit<ButtonProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

interface ProgressProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
    indicatorClassName?: string;
}
declare const Progress: React$1.ForwardRefExoticComponent<ProgressProps & React$1.RefAttributes<HTMLDivElement>>;

declare const sizeClasses$1: {
    readonly sm: "h-12 w-12";
    readonly md: "h-16 w-16";
    readonly lg: "h-20 w-20";
    readonly xl: "h-28 w-28";
};
type ProgressCircleSize = keyof typeof sizeClasses$1;
interface ProgressCircleProps extends React$1.HTMLAttributes<HTMLDivElement> {
    progress: number;
    size?: ProgressCircleSize;
    showPercentage?: boolean;
}
declare function ProgressCircle({ progress, size, showPercentage, className, ...props }: ProgressCircleProps): React$1.JSX.Element;
declare function ProgressCircleSkeleton({ size }: {
    size?: ProgressCircleSize;
}): React$1.JSX.Element;

declare const sizeClasses: {
    readonly sm: "h-4 w-4";
    readonly md: "h-8 w-8";
    readonly lg: "h-12 w-12";
};
interface SpinnerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    size?: keyof typeof sizeClasses;
    text?: string;
}
declare function Spinner({ size, className, text, ...props }: SpinnerProps): React$1.JSX.Element;
declare function PageSpinner({ text }: {
    text?: string;
}): React$1.JSX.Element;
declare function BorderSpinner({ size, className, ...props }: Omit<SpinnerProps, "text">): React$1.JSX.Element;

type StatusType = "success" | "error" | "warning" | "pending" | "info";
interface StatusBadgeProps extends Omit<BadgeProps, "icon"> {
    status: StatusType;
    showIcon?: boolean;
}
declare function StatusBadge({ status, children, showIcon, className, ...props }: StatusBadgeProps): React$1.JSX.Element;

interface SeparatorProps extends React$1.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
}
declare const Separator: React$1.ForwardRefExoticComponent<SeparatorProps & React$1.RefAttributes<HTMLDivElement>>;

declare const sectionVariants: (props?: ({
    variant?: "default" | "muted" | "mesh" | "card" | null | undefined;
    padding?: "default" | "sm" | "lg" | "xl" | "none" | null | undefined;
    container?: "default" | "none" | "narrow" | "wide" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SectionProps extends React$1.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
    as?: "section" | "div" | "article" | "aside";
}
declare const Section: React$1.ForwardRefExoticComponent<SectionProps & React$1.RefAttributes<HTMLElement>>;

declare const headingVariants: (props?: ({
    level?: "display-xl" | "display" | "h1" | "h2" | "h3" | "h4" | null | undefined;
    variant?: "default" | "brand" | "muted" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React$1.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    as?: HeadingLevel;
}
declare const Heading: React$1.ForwardRefExoticComponent<HeadingProps & React$1.RefAttributes<HTMLHeadingElement>>;

declare const containerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined;
    padding?: "default" | "none" | "tight" | "loose" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ContainerProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
}
declare const Container: React$1.ForwardRefExoticComponent<ContainerProps & React$1.RefAttributes<HTMLDivElement>>;

declare function ThemeProvider({ children, ...props }: ThemeProviderProps): React$1.JSX.Element;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};

type ThemeToggleMode = "toggle" | "menu";
interface ThemeToggleProps extends Omit<ButtonProps, "asChild" | "children" | "onClick"> {
    mode?: ThemeToggleMode;
    align?: React$1.ComponentPropsWithoutRef<typeof DropdownMenuContent>["align"];
    showSystemOption?: boolean;
}
declare function ThemeToggle({ mode, variant, size, align, showSystemOption, type, ...buttonProps }: ThemeToggleProps): React$1.JSX.Element;

declare function Toaster(): React$1.JSX.Element;

declare const ToastProvider: React$1.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React$1.RefAttributes<HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const toastVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Toast: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type ToastProps = React$1.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React$1.ReactElement<typeof ToastAction>;

type ToasterToast = ToastProps & {
    id: string;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    action?: ToastActionElement;
};
type ActionType = {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type Action = {
    type: ActionType["ADD_TOAST"];
    toast: ToasterToast;
} | {
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType["DISMISS_TOAST"];
    toastId?: ToasterToast["id"];
} | {
    type: ActionType["REMOVE_TOAST"];
    toastId?: ToasterToast["id"];
};
interface State {
    toasts: ToasterToast[];
}
declare const reducer: (state: State, action: Action) => State;
type ToastInput = Omit<ToasterToast, "id">;
declare function toast({ ...props }: ToastInput): {
    id: string;
    dismiss: () => void;
    update: (nextToast: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value: string;
    disabled?: boolean;
}
declare const AccordionItem: React$1.ForwardRefExoticComponent<AccordionItemProps & React$1.RefAttributes<HTMLDivElement>>;
interface AccordionTriggerProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
interface AccordionContentProps extends React$1.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
    forceMount?: true;
}
declare const AccordionContent: React$1.ForwardRefExoticComponent<AccordionContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const RadioGroup: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type CommandDialogProps = DialogProps;
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => React$1.JSX.Element;
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof React$1.InputHTMLAttributes<HTMLInputElement> | "key"> & {
    ref?: React$1.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof React$1.InputHTMLAttributes<HTMLInputElement> | "key">, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    label?: string;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement> | "key">, "value" | "heading"> & {
    heading?: React$1.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    alwaysRender?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement> | "key">, "disabled" | "value" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};

declare const NavigationMenu: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React$1.RefAttributes<HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React$1.RefAttributes<HTMLLIElement>>;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare const NavigationMenuTrigger: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuIndicator: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "default";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "default";
} & React$1.RefAttributes<HTMLDivElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "ghost" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "ghost" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const tabsTriggerVariants: (props?: ({
    variant?: "default" | "ghost" | "pill" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "ghost" | "pill" | "underline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

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
declare function DefaultErrorFallback({ error: _error, reset, title, description, }: DefaultErrorFallbackProps): ReactNode;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, type AlertProps, AlertTitle, Avatar, AvatarFallback, AvatarImage, type AvatarProps, Badge, type BadgeProps, BorderSpinner, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, Container, type ContainerProps, DefaultErrorFallback, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, ErrorBoundary, Heading, type HeadingProps, Input, type InputProps, Label, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, PageSpinner, Progress, ProgressCircle, type ProgressCircleProps, type ProgressCircleSize, ProgressCircleSkeleton, type ProgressProps, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Section, type SectionProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, type SeparatorProps, Skeleton, SkeletonAvatar, SkeletonButton, SkeletonCard, SkeletonInput, type SkeletonProps, SkeletonText, Spinner, type SpinnerProps, StatusBadge, type StatusBadgeProps, type StatusType, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, ThemeProvider, ThemeToggle, type ThemeToggleMode, type ThemeToggleProps, Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, alertVariants, avatarVariants, badgeVariants, buttonVariants, cardVariants, cn, containerVariants, debounce, fadeIn, fadeInScale, fadeInUp, formatCurrency, formatRelativeTime, generateId, headingVariants, iconPop, inputVariants, isClient, isServer, labelVariants, navigationMenuTriggerStyle, parallaxScroll, photoReveal, reducer, scaleUp, sectionVariants, showContainerVariants, showItemSpringVariants, showItemVariants, skeletonVariants, slideIn, slideInLeft, slideInRight, springBouncy, springGentle, springSnappy, stagger, staggerContainer, staggerContainerVariants, staggerItem, staggerItemVariants, tabsListVariants, tabsTriggerVariants, textareaVariants, toast, reducer as toastReducer, toastVariants, useIsClient, useIsDesktop, useIsMobile, useIsTablet, useMediaQuery, usePrefersDarkMode, usePrefersReducedMotion, useToast };
