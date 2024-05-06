import { SetHasNextPage, SetPage, SetSearch } from "../lib/shared/interfaces";
import ProductsApiService from "./products.api";
import ProductsService from "./products.service";

class ProductsController {
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
  resetAndSearchProducts = (
    searchEventValue: string,
    setPage: SetPage,
    setHasNextPage: SetHasNextPage,
    setSearch: SetSearch
  ) => {
    setTimeout(() => {
      this.productsService.retInitProducts();
      setPage(1);
      setHasNextPage(true);
      setSearch(searchEventValue);
    }, 200);
  };
  restUsersConditionally() {}
}

export default ProductsController;
