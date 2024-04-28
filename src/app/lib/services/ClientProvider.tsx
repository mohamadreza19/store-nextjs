'use client';
import { ReactNode, useEffect, useState } from 'react';
import { Provider as InversifyProvider } from 'inversify-react';
import container from './inversify.config';
import { Provider } from 'react-redux';
import store from './store';
import { ListAlerts } from '../components';
import ErrorCatchService from './ErrorCatchService';
import Loading1 from '../components/leading/Loading1';

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
          <Loading1 />
        </Provider>
      </InversifyProvider>
    );

  return null;
}

export default ClientProvider;
