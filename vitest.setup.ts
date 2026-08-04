import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom ships none of these browser APIs; the components that need them
// (next-themes -> matchMedia, Radix/embla -> ResizeObserver, reveal
// animations -> IntersectionObserver) should mount in tests regardless.

if (typeof window !== "undefined" && !window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated API some libraries still call
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

class ObserverStub {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn().mockReturnValue([]);
  root = null;
  rootMargin = "";
  thresholds = [];
}

if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver = ObserverStub as unknown as typeof ResizeObserver;
}
if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver =
    ObserverStub as unknown as typeof IntersectionObserver;
}

// Radix pointer-capture calls that jsdom's Element lacks.
if (typeof Element !== "undefined") {
  Element.prototype.hasPointerCapture ??= () => false;
  Element.prototype.setPointerCapture ??= () => {};
  Element.prototype.releasePointerCapture ??= () => {};
  Element.prototype.scrollIntoView ??= () => {};
}
