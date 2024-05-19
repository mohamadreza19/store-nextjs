import { ModuleFactory } from "@lib/shared/interfaces";
import FilesApiService from "../files/files.api";

import ProductsApiService from "./products.api";
import ProductsController from "./products.controller";
import ProductsService from "./products.service";
import { AlertService } from "@lib/services";

class ProuctsFactory implements ModuleFactory {
  static createInstances() {
    const productsService = new ProductsService();

    const productsController = new ProductsController(
      new ProductsApiService(),
      new FilesApiService(),
      productsService,
      new AlertService()
    );

    return { productsService, productsController };
  }
}
export default ProuctsFactory;
