import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import AdminApiService from "./admin.api";
import AdminService from "./admin.service";
import { LoadingService, TokenStorageService } from "../lib/services";
import { AuthApiService } from "../lib/services/api";
import { useRouter } from "next/navigation";
import AdminController from "./admin.controller";
import { useSelector } from "react-redux";
import { AdminSideBar } from "../lib/components";
import { Navbar1 } from "../lib/components/navbar";

const InjectionContext = createContext({});
type InjectionEntities = {
  adminService: AdminService;
  adminController: AdminController;
};

interface AdminModuleProps {
  children: ReactNode;
  useAdminSharedUi: boolean;
}

interface AdminModuleState {}

function AdminModule(props: AdminModuleProps) {
  const router = useRouter();

  const memorizedModlue = useMemo(function createInjectEntities() {
    const adminService = new AdminService();
    const adminController = new AdminController(
      new AuthApiService(),
      new AdminApiService(),
      new TokenStorageService(),
      adminService,
      router
    );

    return { adminService, adminController };
  }, []);

  useEffect(() => {
    memorizedModlue.adminController.redirectToDashboardIfAuthorized();
  }, []);

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      {props.useAdminSharedUi ? (
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
            {props.children}
          </div>
        </main>
      ) : (
        props.children
      )}
    </InjectionContext.Provider>
  );
}

export const useAdminInjection = (): InjectionEntities =>
  useContext(InjectionContext) as InjectionEntities;

export default AdminModule;
