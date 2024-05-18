import AppService from "./app.service";
import AppController from "./app.controller";
import AppApiService from "./app.api";
import { AppInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@/lib/shared/interfaces";
import ProuctsFactory from "./products/product.factory";

class AppFactory implements ModuleFactory {
  static createInstances(): AppInjectionEntities {
    const appService = new AppService();
    const appController = new AppController(appService);
    return {
      ...ProuctsFactory.createInstances(),
      appService,
      appController,
    };
  }
}
export default AppFactory;
