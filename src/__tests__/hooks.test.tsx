/**
 * The media-query hooks are SSR-safe wrappers over matchMedia; assert the
 * subscribe/unsubscribe lifecycle and the isClient flip after hydration.
 */
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  useIsClient,
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useMediaQuery,
  usePrefersDarkMode,
  usePrefersReducedMotion,
} from "../index";

describe("useMediaQuery", () => {
  it("returns the current match state and subscribes to changes", () => {
    const addEventListener = vi.fn();
    const removeEventListener = vi.fn();
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        media: "(min-width: 1024px)",
        addEventListener,
        removeEventListener,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
        onchange: null,
      })
    );

    const { result, unmount } = renderHook(() => useMediaQuery("(min-width: 1024px)"));
    expect(result.current).toBe(true);
    expect(addEventListener).toHaveBeenCalled();

    unmount();
    expect(removeEventListener).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
});

describe("breakpoint and preference hooks", () => {
  it("all evaluate without throwing and return booleans", () => {
    for (const hook of [
      useIsMobile,
      useIsTablet,
      useIsDesktop,
      usePrefersDarkMode,
      usePrefersReducedMotion,
    ]) {
      const { result } = renderHook(() => hook());
      expect(typeof result.current).toBe("boolean");
    }
  });
});

describe("useIsClient", () => {
  it("is true after mount in the test environment", () => {
    const { result } = renderHook(() => useIsClient());
    expect(result.current).toBe(true);
  });
});
