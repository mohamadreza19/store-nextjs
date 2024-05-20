"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";

import AppFactory from "./app.factory";
import { AppInjectionEntities } from "./interfaces";
import { useRouter } from "next/navigation";
import { LoadingService } from "@lib/services";
import { MainNavbar } from "@lib/components/navbar";

const InjectionContext = createContext({});

interface AppModuleState {}

function AppModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const loadingService = useMemo(() => new LoadingService(), []);
  const memorizedModlue = useMemo(() => AppFactory.createInstances(router), []);

  useLayoutEffect(() => {
    loadingService.removePluse();

    return () => {
      loadingService.removePluse();
    };
  }, [document.readyState]);
  // useEffect(() => {
  //   memorizedModlue.authController.authorizeUserBasedTokenExist();
  // }, []);

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <MainNavbar />
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useAppInjection = (): AppInjectionEntities =>
  useContext(InjectionContext) as AppInjectionEntities;

export default AppModule;
