import AppService from "./app.service";
import AppController from "./app.controller";
import AppApiService from "./app.api";
import { AppInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@lib/shared/interfaces";
import ProuctsFactory from "./products/product.factory";
import AuthController from "./auth/auth.controller";
import AuthFactory from "./auth/auth.factory";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import CategoriesFactory from "./categories/categories.factory";
import UsersFactory from "./users/users.factory";

class AppFactory implements ModuleFactory {
  private static singletonInstance: AppInjectionEntities | null;
  static createInstances(router: AppRouterInstance): AppInjectionEntities {
    if (!this.singletonInstance) {
      const appService = new AppService();
      const appController = new AppController(appService);

      this.singletonInstance = {
        ...AuthFactory.createInstances(router),
        ...ProuctsFactory.createInstances(),
        ...CategoriesFactory.createInstances(),
        ...UsersFactory.createInstances(),
        appService,
        appController,
      };
    }

    return this.singletonInstance;
  }
}
export default AppFactory;
