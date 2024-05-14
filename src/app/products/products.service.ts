import GlobalStoreService from "../lib/services/GlobalStoreService";
import { AllProductsResponse, Product } from "./interfaces";
import { productSliceActions } from "./reducer/product.slice";
import { productsSliceActions } from "./reducer/products.slice";

class ProductsService extends GlobalStoreService {
  public modalId1 = "id-" + Math.random() * 1000;
  public modalId2 = "id-" + Math.random() * 1000;

  setProductById(id: string) {}
  setProducts(values: AllProductsResponse) {
    this.dispatch(productsSliceActions.add(values));
  }
  replaceProduct(product: Product) {
    this.dispatch(productsSliceActions.replaceProduct(product));
  }
  setProduct(product: Product) {
    this.dispatch(productSliceActions.add(product));
  }

  getProduct() {
    return this.getUseSelector()((store) => store.product);
  }
  getProducts() {
    return this.getUseSelector()((store) => store.products);
  }
  getProductsLength() {
    return this.getStore().products.data.length;
  }
  getProductById(useAshook = false, id: string) {
    return useAshook
      ? this.getUseSelector()((store) =>
          store.products.data.find((product) => product._id === id)
        )
      : this.getStore().products.data.find((product) => product._id === id);
  }
  retInitProducts() {
    this.dispatch(productsSliceActions.reInit());
  }
  removeProductById(id: string) {
    this.dispatch(productsSliceActions.removeProductById(id));
  }
}
export default ProductsService;
