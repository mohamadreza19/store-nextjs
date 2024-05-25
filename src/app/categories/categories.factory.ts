import CategoriesService from "./categories.service";
import CategoriesController from "./categories.controller";
import CategoriesApiService from "./categories.api";
import { CategoriesInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class CategoriesFactory implements ModuleFactory {
  private static singletonInstance: CategoriesInjectionEntities | null;
  static createInstances(): CategoriesInjectionEntities {
    if (!this.singletonInstance) {
      const categoriesService = new CategoriesService();

      const categoriesController = new CategoriesController(
        categoriesService,
        new CategoriesApiService()
      );
      this.singletonInstance = {
        categoriesService,
        categoriesController,
      };
    }

    return this.singletonInstance;
  }
}
export default CategoriesFactory;
