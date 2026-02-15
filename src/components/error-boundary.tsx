"use client";

import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  resetErrorBoundary = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      const { fallback } = this.props;
      const { error } = this.state;

      if (typeof fallback === "function") {
        return fallback(error, this.resetErrorBoundary);
      }

      if (fallback) {
        return fallback;
      }

      return (
        <DefaultErrorFallback
          error={error}
          reset={this.resetErrorBoundary}
        />
      );
    }

    return this.props.children;
  }
}

interface DefaultErrorFallbackProps {
  error: Error;
  reset: () => void;
  title?: string;
  description?: string;
}

export function DefaultErrorFallback({
  error,
  reset,
  title = "Something went wrong",
  description = "We encountered an unexpected error. Please try again.",
}: DefaultErrorFallbackProps): ReactNode {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-12">
      <div className="neu-card rounded-2xl p-8 sm:p-12 max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="neu-pressed rounded-full p-4">
            <svg
              className="h-8 w-8 text-destructive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-section-title mb-3">{title}</h2>
        <p className="text-description mb-6">{description}</p>


<div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="cta-primary px-6 py-3 rounded-xl focus-ring"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
