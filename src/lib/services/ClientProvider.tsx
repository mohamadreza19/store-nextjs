"use client";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { Provider as InversifyProvider } from "inversify-react";
import container from "./inversify.config";
import { Provider } from "react-redux";
import store from "./store";
import { DismissAlert, ListAlerts } from "../components";
import ErrorCatchService from "./ErrorCatchService";
import PulseLoader from "../components/loading/PulseLoader";

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
      <InversifyProvider container={container}>
        <Provider store={store}>
          {props.children}
          <ListAlerts />
          <DismissAlert />
          <PulseLoader />
        </Provider>
      </InversifyProvider>
    );

  return null;
}

export default ClientProvider;
