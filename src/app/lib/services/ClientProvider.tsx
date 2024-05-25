"use client";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { Provider as InversifyProvider } from "inversify-react";

import { Provider } from "react-redux";
import store from "./store";
import { DismissAlert, ListAlerts } from "../components";
import ErrorCatchService from "./ErrorCatchService";
import PulseLoader from "../components/loading/PulseLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/ApiService";

interface ClientProviderProps {
  children: ReactNode;
}

function ClientProvider(props: ClientProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {props.children}
          <ListAlerts />
          <DismissAlert />
          <PulseLoader />
        </Provider>
      </QueryClientProvider>
    );

  return null;
}

export default ClientProvider;
