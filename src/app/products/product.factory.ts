import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { ModuleFactory } from "../lib/shared/interfaces";
import ProductsApiService from "./products.api";
import ProductsController from "./products.controller";
import ProductsService from "./products.service";

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
