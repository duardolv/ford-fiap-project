import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";

interface FallbackProps {
  resetError?: () => void;
}

// A generic React Error Boundary for render-phase errors
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onReset?: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  
  reset = () => {
    this.setState({ hasError: false });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return <DefaultFallback resetError={this.reset} />;
    }
    return this.props.children;
  }
}

export function DefaultFallback({ resetError }: FallbackProps) {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Alguma coisa deu errado.</h1>
      <button onClick={resetError}>Recarregar</button>
    </div>
  );
}

// A “route‐error” component for loaders/actions/errors in react-router data routes
export function RouteErrorBoundary({ onReset }: { onReset?: () => void }) {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <ErrorPage onReset={onReset} />;
  }

  // Fallback for real JS errors
  return <ErrorPage onReset={onReset} />;
}
