"use client";
import React, { createContext, useContext, useMemo } from "react";

import LoginFactory from "./login.factory";
import { LoginInjectionEntities } from "./interfaces";
import { useRouter } from "next/navigation";

const InjectionContext = createContext({});

interface LoginModuleState {}

function LoginModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => LoginFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      {children}
    </InjectionContext.Provider>
  );
}

export const useLoginInjection = (): LoginInjectionEntities =>
  useContext(InjectionContext) as LoginInjectionEntities;

export default LoginModule;
