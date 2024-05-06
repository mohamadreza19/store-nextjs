import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ModuleFactory } from "../lib/shared/interfaces";
import AdminService from "./admin.service";
import AdminController from "./admin.controller";
import { AuthApiService } from "../lib/services/api";
import AdminApiService from "./admin.api";
import { TokenStorageService } from "../lib/services";
import { AdminInjectionEntities } from "./interfaces";
import ProuctsFactory from "../products/product.factory";

class AdminFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): AdminInjectionEntities {
    const adminService = new AdminService();
    const adminController = new AdminController(
      new AuthApiService(),
      new AdminApiService(),
      new TokenStorageService(),
      adminService,
      router
    );
    return {
      ...ProuctsFactory.createInstances(),
      adminService,
      adminController,
    };
  }
}
export default AdminFactory;
