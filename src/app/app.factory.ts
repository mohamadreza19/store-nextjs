import AppService from "./app.service";
import AppController from "./app.controller";
import AppApiService from "./app.api";
import { AppInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@lib/shared/interfaces";
import ProuctsFactory from "./products/product.factory";
import AuthController from "./auth/auth.controller";
import AuthFactory from "./auth/auth.factory";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class AppFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): AppInjectionEntities {
    const appService = new AppService();
    const appController = new AppController(appService);

    return {
      ...AuthFactory.createInstances(router),
      ...ProuctsFactory.createInstances(),
      appService,
      appController,
    };
  }
}
export default AppFactory;
