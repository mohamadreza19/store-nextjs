import GlobalStoreService from "../lib/services/GlobalStoreService";
import { AllProductsResponse } from "./interfaces";
import { productsSliceActions } from "./reducer/products.slice";

class ProductsService extends GlobalStoreService {
  public modalId1 = "id-" + Math.random() * 1000;
  get products() {
    return this.getUseSelector()((store) => store.products);
  }
  getProductsLength() {
    return this.getStore().products.data.length;
  }
  setProducts(values: AllProductsResponse) {
    this.dispatch(productsSliceActions.add(values));
  }
  retInitProducts() {
    this.dispatch(productsSliceActions.reInit());
  }
}
export default ProductsService;
