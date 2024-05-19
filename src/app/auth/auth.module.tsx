import React, { createContext, useContext, useMemo } from "react";

import AuthFactory from "./auth.factory";
import { AuthInjectionEntities } from "./interfaces";
import { useRouter } from "next/navigation";

const InjectionContext = createContext({});

interface AuthModuleState {}

function AuthModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => AuthFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useAuthInjection = (): AuthInjectionEntities =>
  useContext(InjectionContext) as AuthInjectionEntities;

export default AuthModule;
