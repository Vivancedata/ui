import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from "vitest";
import { DefaultErrorFallback, ErrorBoundary } from "../components/error-boundary";

afterEach(cleanup);

const shouldThrow = { current: true };

function Boom({ message = "kaboom" }: { message?: string }) {
  if (shouldThrow.current) {
    throw new Error(message);
  }
  return <p>recovered</p>;
}

describe("ErrorBoundary", () => {
  let consoleError: MockInstance;

  beforeEach(() => {
    shouldThrow.current = true;
    // React logs every caught render error; keep the test output readable.
    consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  it("renders children untouched when nothing throws", () => {
    const onError = vi.fn();
    render(
      <ErrorBoundary onError={onError} fallback={<p>fallback</p>}>
        <p>healthy</p>
      </ErrorBoundary>
    );

    expect(screen.getByText("healthy")).toBeInTheDocument();
    expect(screen.queryByText("fallback")).not.toBeInTheDocument();
    expect(onError).not.toHaveBeenCalled();
  });

  it("shows the default fallback and resets to children on 'Try again'", () => {
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>
    );

    expect(screen.getByRole("heading", { name: "Something went wrong" })).toBeInTheDocument();
    expect(screen.queryByText("recovered")).not.toBeInTheDocument();

    shouldThrow.current = false;
    fireEvent.click(screen.getByRole("button", { name: "Try again" }));

    expect(screen.getByText("recovered")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Something went wrong" })).not.toBeInTheDocument();
  });

  it("renders a static fallback node instead of the default", () => {
    render(
      <ErrorBoundary fallback={<p>custom fallback</p>}>
        <Boom />
      </ErrorBoundary>
    );

    expect(screen.getByText("custom fallback")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Try again" })).not.toBeInTheDocument();
  });

  it("passes the thrown error and a working reset to a render-function fallback", () => {
    const fallback = vi.fn((error: Error, reset: () => void) => (
      <button onClick={reset}>retry after {error.message}</button>
    ));

    render(
      <ErrorBoundary fallback={fallback}>
        <Boom message="disk full" />
      </ErrorBoundary>
    );

    const retry = screen.getByRole("button", { name: "retry after disk full" });
    expect(fallback).toHaveBeenCalledWith(expect.objectContaining({ message: "disk full" }), expect.any(Function));

    shouldThrow.current = false;
    fireEvent.click(retry);

    expect(screen.getByText("recovered")).toBeInTheDocument();
  });

  it("reports the error and component stack to onError exactly once", () => {
    const onError = vi.fn();
    render(
      <ErrorBoundary onError={onError}>
        <Boom message="bad state" />
      </ErrorBoundary>
    );

    expect(onError).toHaveBeenCalledTimes(1);
    const [error, info] = onError.mock.calls[0];
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe("bad state");
    expect(info.componentStack).toContain("Boom");
  });

  it("catches again if the child still throws after a reset", () => {
    const onError = vi.fn();
    render(
      <ErrorBoundary onError={onError}>
        <Boom message="persistent" />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));

    expect(screen.getByRole("heading", { name: "Something went wrong" })).toBeInTheDocument();
    expect(onError).toHaveBeenCalledTimes(2);
  });
});

describe("DefaultErrorFallback", () => {
  it("renders default copy and calls reset on click", () => {
    const reset = vi.fn();
    render(<DefaultErrorFallback error={new Error("x")} reset={reset} />);

    expect(screen.getByRole("heading", { name: "Something went wrong" })).toBeInTheDocument();
    expect(
      screen.getByText("We encountered an unexpected error. Please try again.")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(reset).toHaveBeenCalledTimes(1);
  });

  it("accepts a custom title and description and never leaks the error message", () => {
    render(
      <DefaultErrorFallback
        error={new Error("secret internal detail")}
        reset={() => {}}
        title="Payment failed"
        description="Your card was not charged."
      />
    );

    expect(screen.getByRole("heading", { name: "Payment failed" })).toBeInTheDocument();
    expect(screen.getByText("Your card was not charged.")).toBeInTheDocument();
    expect(screen.queryByText(/secret internal detail/)).not.toBeInTheDocument();
  });
});
