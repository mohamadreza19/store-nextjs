import { ModuleFactory } from "../lib/shared/interfaces";
import ProductsApiService from "./products.api";
import ProductsController from "./products.controller";
import ProductsService from "./products.service";

class ProuctsFactory implements ModuleFactory {
  static createInstances() {
    const productsService = new ProductsService();

    const productsController = new ProductsController(
      new ProductsApiService(),
      productsService
    );

    return { productsService, productsController };
  }
}
export default ProuctsFactory;
