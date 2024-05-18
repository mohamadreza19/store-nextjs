import GlobalStoreService from "@/lib/services/GlobalStoreService";
import { AllProductsResponse, Product } from "./interfaces";
import { productSliceActions } from "./reducer/product.slice";
import { productsSliceActions } from "./reducer/products.slice";

class ProductsService extends GlobalStoreService {
  public modalId1 = "id-" + Math.random() * 1000;
  public modalId2 = "id-" + Math.random() * 1000;
  private selectProducts = (useAshook = true) => {
    return useAshook
      ? this.getUseSelector()((state) => state.products)
      : this.getStore().products;
  };
  private selectProduct = (useAshook = true) => {
    return useAshook
      ? this.getUseSelector()((state) => state.product)
      : this.getStore().product;
  };

  setProductById(id: string) {}
  setProducts(values: AllProductsResponse) {
    this.dispatch(productsSliceActions.add(values));
  }
  replaceProductInProducts(product: Product) {
    this.dispatch(productsSliceActions.replaceProduct(product));
  }
  setProduct(product: Product) {
    this.dispatch(productSliceActions.add(product));
  }

  getProduct(useAshook = true) {
    return this.selectProduct(useAshook);
  }
  getProducts(useAshook = true) {
    return this.selectProducts(useAshook);
  }
  getProductsLength() {
    return this.getStore().products.data.length;
  }
  getProductById(useAshook = true, id: string) {
    return this.selectProducts(useAshook).data.find(
      (product) => product._id === id
    );
  }
  reInitProducts = () => {
    this.dispatch(productsSliceActions.reInit());
  };
  removeProductById(id: string) {
    this.dispatch(productsSliceActions.removeProductById(id));
  }
}
export default ProductsService;
