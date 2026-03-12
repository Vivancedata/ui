// Utility functions
export { cn, formatCurrency, formatRelativeTime, generateId, debounce, isClient, isServer } from "./lib/utils";

// Animation system
export {
  fadeInUp,
  fadeIn,
  scaleUp,
  slideIn,
  fadeInScale,
  slideInLeft,
  slideInRight,
  stagger,
  staggerContainer,
  staggerItem,
  staggerContainerVariants,
  staggerItemVariants,
  showContainerVariants,
  showItemVariants,
  showItemSpringVariants,
  photoReveal,
  iconPop,
  parallaxScroll,
  springGentle,
  springSnappy,
  springBouncy,
} from "./lib/animations";

// Hooks
export {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  usePrefersDarkMode,
  usePrefersReducedMotion,
} from "./hooks/use-media-query";

export { useIsClient } from "./hooks/use-is-client";

// Base components
export { Button, buttonVariants, type ButtonProps } from "./components/button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants, type CardProps } from "./components/card";
export { Badge, badgeVariants, type BadgeProps } from "./components/badge";
export { Input, inputVariants, type InputProps } from "./components/input";
export { Textarea, textareaVariants, type TextareaProps } from "./components/textarea";
export { Label, labelVariants } from "./components/label";
export { Alert, AlertTitle, AlertDescription, alertVariants, type AlertProps } from "./components/alert";
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./components/alert-dialog";
export { GlassCard, glassCardVariants, type GlassCardProps } from "./components/glass-card";
export { AnimatedCard, type AnimatedCardProps } from "./components/animated-card";
export { Skeleton, SkeletonText, SkeletonCard, SkeletonInput, SkeletonButton, SkeletonAvatar, skeletonVariants, type SkeletonProps } from "./components/skeleton";
export { Avatar, AvatarImage, AvatarFallback, avatarVariants, type AvatarProps } from "./components/avatar";
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "./components/carousel";
export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
} from "./components/form";
export { Progress, type ProgressProps } from "./components/progress";
export { ProgressCircle, ProgressCircleSkeleton, type ProgressCircleProps, type ProgressCircleSize } from "./components/progress-circle";
export { Spinner, PageSpinner, BorderSpinner, type SpinnerProps } from "./components/spinner";
export { StatusBadge, type StatusBadgeProps, type StatusType } from "./components/status-badge";
export { Separator, type SeparatorProps } from "./components/separator";
export { Section, sectionVariants, type SectionProps } from "./components/section";
export { Heading, headingVariants, type HeadingProps } from "./components/heading";
export { Container, containerVariants, type ContainerProps } from "./components/container";
export { ThemeProvider, type ThemeProviderProps } from "./components/theme-provider";
export { ThemeToggle, type ThemeToggleProps, type ThemeToggleMode } from "./components/theme-toggle";
export { Toaster } from "./components/toaster";
export { useToast, toast, reducer as toastReducer } from "./components/use-toast";

// Radix UI primitives
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/accordion";
export { Checkbox } from "./components/checkbox";
export { Switch } from "./components/switch";
export { RadioGroup, RadioGroupItem } from "./components/radio-group";
export { ScrollArea, ScrollBar } from "./components/scroll-area";
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./components/command";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./components/dropdown-menu";
export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./components/navigation-menu";
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./components/select";

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/dialog";

// Tooltip
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/tooltip";

// Toast
export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  toastVariants,
} from "./components/toast";

// Tabs
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
} from "./components/tabs";

// Interactive effect components
export { MagneticButton, RippleButton, GlowButton, BorderBeamButton } from "./components/magnetic-button";
export { CursorGlow, GradientCursorGlow } from "./components/cursor-glow";
export { CursorFollower, SpotlightCursor, TrailCursor } from "./components/cursor-follower";
export { GlowSection, HeroGlowSection, SubtleGlowSection } from "./components/glow-section";

// Animation/visual components
export { AnimatedHeading, GradientText } from "./components/animated-text";
export {
  FloatingElement,
  RotatingElement,
  PulsingElement,
  OrbitElement,
  AnimatedBlob,
  AnimatedGrid,
  AnimatedShapes,
  ParticlesBackground,
  WaveAnimation,
} from "./components/floating-elements";
export { ParallaxScroll } from "./components/parallax-scroll";
export { ReadingProgress } from "./components/reading-progress";

// Layout/UI components
export { CommandPalette, type CommandPaletteItem } from "./components/command-palette";
export { BreadcrumbNav } from "./components/breadcrumb-nav";
export { ExpandableCard } from "./components/expandable-card";
export { ScrollToTop } from "./components/scroll-to-top";
export {
  PageTransition,
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
  ScaleOnScroll,
  MaskReveal,
} from "./components/page-transition";
export { ErrorBoundary, DefaultErrorFallback } from "./components/error-boundary";
