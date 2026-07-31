import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  cn,
  debounce,
  formatCurrency,
  formatRelativeTime,
  generateId,
  isClient,
  isServer,
} from "../lib/utils";

describe("utils", () => {
  beforeEach(() => {
    vi.useRealTimers();
    vi.setSystemTime(new Date("2026-03-12T12:00:00.000Z"));
  });

  // Regression: tailwind-merge does not know the named type scale, so without
  // the extendTailwindMerge config in cn() it treats `text-body-sm` as a colour
  // and drops `text-primary-foreground`, rendering ink text on an ink button.
  it("keeps a text colour when a named type-scale size follows it", () => {
    expect(cn("bg-primary text-primary-foreground", "text-body-sm")).toBe(
      "bg-primary text-primary-foreground text-body-sm"
    );
    expect(cn("text-brand", "text-display-xl")).toBe(
      "text-brand text-display-xl"
    );
    // Two sizes from the scale still collapse to the last one.
    expect(cn("text-body", "text-heading-2")).toBe("text-heading-2");
    // And a real colour conflict still resolves to the last colour.
    expect(cn("text-brand", "text-foreground")).toBe("text-foreground");
  });

  it("merges class names with tailwind precedence", () => {
    expect(cn("px-2", undefined, "px-4", "font-semibold")).toBe(
      "px-4 font-semibold"
    );
  });

  it("formats currency with locale support", () => {
    expect(formatCurrency(1234.5)).toBe("$1,234.50");
    expect(formatCurrency(99, "EUR", "de-DE")).toContain("99,00");
  });

  it("formats relative time against the current clock", () => {
    expect(formatRelativeTime(new Date("2026-03-11T12:00:00.000Z"))).toBe("yesterday");
    expect(formatRelativeTime(new Date("2026-03-12T12:00:30.000Z"))).toBe("in 30 seconds");
  });

  it("generates prefixed ids", () => {
    const id = generateId("button");
    expect(id).toMatch(/^button-[a-z0-9]{7}$/);
  });

  it("debounces repeated calls", () => {
    vi.useFakeTimers();
    const spy = vi.fn();
    const debounced = debounce(spy, 100);

    debounced("first");
    debounced("second");

    vi.advanceTimersByTime(99);
    expect(spy).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("second");
  });

  it("reports the runtime environment flags", () => {
    expect(isClient).toBe(true);
    expect(isServer).toBe(false);
  });
});
