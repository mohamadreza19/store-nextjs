import { useEffect } from "react";

interface ErrorCatchServiceProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorCatchService() {
  useEffect(() => {
    window.addEventListener("unhandledrejection", (event) => {
      console.log({ event });
    });
  }, []);
  return null;
}

export default ErrorCatchService;
