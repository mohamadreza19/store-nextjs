import React, { createContext, useContext, useEffect, useMemo } from "react";

import { useRouter } from "next/navigation";
import { AdminSideBar } from "../lib/components";
import { ModuleProps } from "../lib/shared/interfaces";
import AdminFactory from "./admin.factory";
import { AdminInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface AdminModuleState {}

function AdminModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => AdminFactory.createInstances(router),
    []
  );

  useEffect(() => {
    memorizedModlue.adminController.redirectToDashboardIfAuthorized();
  }, []);

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main
        className={`flex w-full h-screen bg-stone-50 ${
          !memorizedModlue.adminService.shouldRenderSharedSideBar && "px-3"
        }`}
      >
        {memorizedModlue.adminService.shouldRenderSharedSideBar && (
          <AdminSideBar />
        )}
        <div className=" w-full ms-64 px-2">
          <div className="mt-10"></div>
          {children}
        </div>
      </main>
    </InjectionContext.Provider>
  );
}

export const useAdminInjection = (): AdminInjectionEntities =>
  useContext(InjectionContext) as AdminInjectionEntities;

export default AdminModule;
