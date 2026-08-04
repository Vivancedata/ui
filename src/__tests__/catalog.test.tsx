/**
 * Catalog smoke test: every component the barrel exports must mount.
 *
 * This is deliberately shallow. Its value is catching whole-file breakage --
 * a bad import, a missing "use client" dependency, a Radix primitive whose
 * required context is undocumented, an export pointing at a deleted file.
 * The 6-file coverage include used to hide 37 components from CI entirely;
 * this puts every component under at least render coverage, and the
 * per-component tests in components.test.tsx stay the place for behaviour.
 */
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  Checkbox,
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  Container,
  DefaultErrorFallback,
  Dialog,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuTrigger,
  ErrorBoundary,
  Heading,
  Input,
  Label,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  Paragraph,
  Progress,
  ProgressCircle,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Section,
  Select,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Spinner,
  StatusBadge,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider,
  ThemeToggle,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../index";

// Name -> minimal mountable element. Closed/trigger-only states are fine;
// the point is that the module graph loads and the root renders.
const CATALOG: Array<[string, React.ReactElement]> = [
  ["Button", <Button key="b">Go</Button>],
  ["Badge", <Badge key="b">New</Badge>],
  ["Input", <Input key="b" aria-label="name" />],
  ["Textarea", <Textarea key="b" aria-label="notes" />],
  ["Label", <Label key="b">Field</Label>],
  ["Checkbox", <Checkbox key="b" aria-label="agree" />],
  ["Switch", <Switch key="b" aria-label="toggle" />],
  [
    "RadioGroup",
    <RadioGroup key="b" defaultValue="a">
      <RadioGroupItem value="a" aria-label="a" />
    </RadioGroup>,
  ],
  [
    "Select",
    <Select key="b">
      <SelectTrigger aria-label="pick">
        <SelectValue placeholder="Pick" />
      </SelectTrigger>
    </Select>,
  ],
  [
    "Card",
    <Card key="b">
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>Body</CardContent>
    </Card>,
  ],
  [
    "Alert",
    <Alert key="b">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Detail</AlertDescription>
    </Alert>,
  ],
  [
    "Avatar",
    <Avatar key="b">
      <AvatarFallback>VD</AvatarFallback>
    </Avatar>,
  ],
  ["Skeleton", <Skeleton key="b" className="h-4 w-24" />],
  ["Spinner", <Spinner key="b" />],
  ["StatusBadge", <StatusBadge key="b" status="success" />],
  ["Progress", <Progress key="b" value={40} />],
  ["ProgressCircle", <ProgressCircle key="b" progress={40} />],
  ["Separator", <Separator key="b" />],
  ["Container", <Container key="b">content</Container>],
  ["Section", <Section key="b">content</Section>],
  ["Heading", <Heading key="b">Heading</Heading>],
  ["Paragraph", <Paragraph key="b">Prose</Paragraph>],
  [
    "Tabs",
    <Tabs key="b" defaultValue="one">
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Panel</TabsContent>
    </Tabs>,
  ],
  [
    "Accordion",
    <Accordion key="b" type="single" collapsible>
      <AccordionItem value="a">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Inside</AccordionContent>
      </AccordionItem>
    </Accordion>,
  ],
  [
    "Tooltip",
    <Tooltip key="b">
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>Tip</TooltipContent>
    </Tooltip>,
  ],
  [
    "Dialog",
    <Dialog key="b">
      <DialogTrigger>Open</DialogTrigger>
    </Dialog>,
  ],
  [
    "AlertDialog",
    <AlertDialog key="b">
      <AlertDialogTrigger>Open</AlertDialogTrigger>
    </AlertDialog>,
  ],
  [
    "DropdownMenu",
    <DropdownMenu key="b">
      <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
    </DropdownMenu>,
  ],
  [
    "NavigationMenu",
    <NavigationMenu key="b">
      <NavigationMenuList>
        <NavigationMenuItem>Home</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>,
  ],
  [
    "Command",
    <Command key="b">
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results</CommandEmpty>
        <CommandItem>Item</CommandItem>
      </CommandList>
    </Command>,
  ],
  [
    "Carousel",
    <Carousel key="b">
      <CarouselContent>
        <CarouselItem>Slide</CarouselItem>
      </CarouselContent>
    </Carousel>,
  ],
  [
    "ScrollArea",
    <ScrollArea key="b" className="h-20">
      <div>scrollable</div>
    </ScrollArea>,
  ],
  [
    "ErrorBoundary",
    <ErrorBoundary key="b">
      <div>safe</div>
    </ErrorBoundary>,
  ],
  ["DefaultErrorFallback", <DefaultErrorFallback key="b" error={new Error("x")} reset={() => {}} />],
  ["Toaster", <Toaster key="b" />],
  ["ThemeToggle", <ThemeToggle key="b" />],
];

describe("component catalog mounts", () => {
  for (const [name, element] of CATALOG) {
    it(`${name} renders`, () => {
      const { container } = render(
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider>{element}</TooltipProvider>
        </ThemeProvider>
      );
      expect(container).toBeTruthy();
    });
  }
});
