import CategoriesService from "./categories.service";
import CategoriesController from "./categories.controller";
import CategoriesApiService from "./categories.api";
import { CategoriesInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class CategoriesFactory implements ModuleFactory {
  static createInstances(): CategoriesInjectionEntities {
    const categoriesService = new CategoriesService();
    const categoriesController = new CategoriesController(
      categoriesService,
      new CategoriesApiService()
    );
    return {
      categoriesService,
      categoriesController,
    };
  }
}
export default CategoriesFactory;
