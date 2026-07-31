import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button, buttonVariants } from "../components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cardVariants,
} from "../components/card";
import {
  ProgressCircle,
  ProgressCircleSkeleton,
} from "../components/progress-circle";
import {
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonInput,
  SkeletonText,
  skeletonVariants,
} from "../components/skeleton";
import { StatusBadge } from "../components/status-badge";

describe("button", () => {
  it("renders a loading button state", () => {
    render(
      <Button isLoading variant="default" shape="pill" size="xl">
        Save
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("Loading...");
    expect(button.className).toContain("bg-primary");
    // Marketing CTAs are pills; app chrome is a 6px square.
    expect(button.className).toContain("rounded-pill");
    expect(button.className).toContain("h-12");
  });

  it("renders slot content when used asChild", () => {
    render(
      <Button asChild variant="outline">
        <a href="https://example.com/docs">Docs</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: "Docs" });
    expect(link).toHaveAttribute("href", "https://example.com/docs");
    expect(link.className).toContain("border");
    expect(buttonVariants({ variant: "success" })).toContain("bg-success");
  });
});

describe("card", () => {
  it("renders semantic title levels and shared sections", () => {
    render(
      <Card variant="elevated">
        <CardHeader>
          <CardTitle as="h2">Shared Card</CardTitle>
          <CardDescription>Shared description</CardDescription>
        </CardHeader>
        <CardContent>Shared content</CardContent>
      </Card>
    );

    expect(screen.getByRole("heading", { level: 2, name: "Shared Card" })).toBeVisible();
    expect(screen.getByText("Shared description")).toBeVisible();
    expect(screen.getByText("Shared content")).toBeVisible();
    expect(cardVariants({ variant: "elevated" })).toContain("shadow-2");
  });
});

describe("status badge", () => {
  it("uses default copy and icon for a status", () => {
    const { container } = render(<StatusBadge status="success" />);

    expect(screen.getByText("Success")).toBeVisible();
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("supports custom copy without an icon", () => {
    const { container } = render(
      <StatusBadge status="warning" showIcon={false}>
        Needs review
      </StatusBadge>
    );

    expect(screen.getByText("Needs review")).toBeVisible();
    expect(container.querySelector("svg")).toBeNull();
  });
});

describe("progress circle", () => {
  it("clamps values and renders the percentage overlay", () => {
    const { container } = render(<ProgressCircle progress={135} showPercentage size="lg" />);

    expect(screen.getByText("100%")).toBeVisible();
    const circle = container.querySelector('circle[stroke-linecap="round"]');
    expect(circle?.getAttribute("class")).toContain("stroke-success");
  });

  it("creates unique gradients and renders skeleton fallback", () => {
    const { container } = render(
      <>
        <ProgressCircle progress={80} />
        <ProgressCircle progress={25} />
        <ProgressCircleSkeleton size="sm" />
      </>
    );

    const gradients = Array.from(container.querySelectorAll("linearGradient")).map((node) =>
      node.getAttribute("id")
    );
    expect(new Set(gradients).size).toBe(2);
    expect(container.querySelector(".animate-pulse")).toBeTruthy();
  });
});

describe("skeleton", () => {
  it("resolves tone and shape variants", () => {
    expect(skeletonVariants({ variant: "shimmer" })).toContain("shimmer");
    expect(skeletonVariants({ variant: "circular" })).toContain("rounded-full");
    expect(skeletonVariants({ variant: "shimmer", shape: "rounded" })).toContain("rounded-xl");
  });

  it("renders composite skeleton helpers", () => {
    const { container } = render(
      <div>
        <Skeleton className="h-8 w-8" />
        <SkeletonText lines={2} />
        <SkeletonCard />
        <SkeletonInput />
        <SkeletonButton />
        <SkeletonAvatar size="lg" />
      </div>
    );

    expect(container.querySelectorAll(".animate-pulse").length).toBeGreaterThan(6);
    expect(container.querySelector(".h-14.w-14")).toBeTruthy();
  });
});
