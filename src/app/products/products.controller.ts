import { SetHasNextPage, SetPage, SetSearch } from "../lib/shared/interfaces";
import ProductsApiService from "./products.api";
import ProductsService from "./products.service";

class ProductsController {
  private timeoutId: null | NodeJS.Timeout = null;

  constructor(
    private productsApiService: ProductsApiService,
    private productsService: ProductsService
  ) {}
  async loadProductsAndSetPagination(
    page: number,
    search: string,
    setPage: SetPage,
    setHasNextPage: SetHasNextPage
  ) {
    const result = await this.productsApiService.getAllProducts(
      page,
      10,
      search
    );

    this.productsService.setProducts(result);

    if (!(result.meta.page < result.meta.pages)) {
      return setHasNextPage(false);
    }

    setPage((prevPage) => prevPage + 1);
  }

  resetAndSearchProducts = (search: string, setHasNextPage: SetHasNextPage) => {
    if (this.timeoutId) clearTimeout(this.timeoutId);

    this.productsService.retInitProducts();

    this.timeoutId = setTimeout(async () => {
      if (!this.productsService.getProductsLength()) {
        const result = await this.productsApiService.getAllProducts(
          1,
          10,
          search
        );

        this.productsService.setProducts(result);

        if (!(result.meta.page < result.meta.pages))
          return setHasNextPage(false);
      }
    }, 380);
  };
  toggleCreateProductModal = () => {
    console.log(this.productsService.modalId1);
    document
      .getElementById(this.productsService.modalId1)
      ?.classList.toggle("hidden");
  };
}

export default ProductsController;
