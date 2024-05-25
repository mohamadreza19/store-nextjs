import { ModuleFactory } from "@lib/shared/interfaces";
import FilesApiService from "../files/files.api";

import ProductsApiService from "./products.api";
import ProductsController from "./products.controller";
import ProductsService from "./products.service";
import { AlertService } from "@lib/services";
import { ProductsInjectionEntities } from "./interfaces";

class ProuctsFactory implements ModuleFactory {
  private static singletonInstance: ProductsInjectionEntities | null;
  static createInstances(): ProductsInjectionEntities {
    if (!this.singletonInstance) {
      const productsService = new ProductsService();

      const productsController = new ProductsController(
        new ProductsApiService(),
        new FilesApiService(),
        productsService,
        new AlertService()
      );
      this.singletonInstance = { productsService, productsController };
    }

    return this.singletonInstance;
  }
}
export default ProuctsFactory;
