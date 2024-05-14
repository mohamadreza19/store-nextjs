import FilesApiService from '../files/files.api';
import { AlertService } from '../lib/services';
import { SetHasNextPage, SetPage, SetSearch } from '../lib/shared/interfaces';
import { CreateProductBody, CreateProductFormikValues } from './interfaces';
import ProductsApiService from './products.api';
import ProductsService from './products.service';

class ProductsController {
  private timeoutId: null | NodeJS.Timeout = null;

  constructor(
    private productsApiService: ProductsApiService,
    private filesApiService: FilesApiService,
    private productsService: ProductsService,
    private alertService: AlertService
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
  getProductById = async (id: string) => {
    document
      .getElementById(this.productsService.modalId2)
      ?.classList.toggle('hidden');
    const result = await this.productsApiService.getProductById(id);

    this.productsService.replaceProduct(result);
    this.productsService.setProduct(result);
  };
  toggleCreateProductModal = () => {
    console.log(this.productsService.modalId1);
    document
      .getElementById(this.productsService.modalId1)
      ?.classList.toggle('hidden');
  };
  createProduct = async (values: CreateProductFormikValues) => {
    const { categoryId, file, name, price } = values;

    const productResult = await this.productsApiService.createProduct({
      name,
      categoryId,
      price: Number((price as string).replace(/,/g, '')),
    });
    if (file)
      await this.filesApiService.uploadFile({
        entityId: productResult._id,
        entityType: 'product',
        file: file,
      });

    const result = await this.productsApiService.getAllProducts(1, 10, '');

    this.productsService.retInitProducts();
    this.productsService.setProducts(result);

    document
      .getElementById(this.productsService.modalId1)
      ?.classList.toggle('hidden');

    setTimeout(() => {
      this.alertService.addDismissAlert({
        message: 'محصول با موفقیت اضافه شد',
        open: true,
        type: 'success',
      });
    }, 600);
  };
  removeProductById = async (productId: string) => {
    const result = this.productsService.getProductById(false, productId);
    console.log(result);
    await this.productsApiService.removeProductById(productId);
    this.productsService.removeProductById(productId);

    this.alertService.addDismissAlert({
      message: `محصول " ${result?.name} " با موففقیت حذف شد`,
      open: true,
      type: 'blue',
    });
  };
  pushFileForProduct = async (file: File, productId: string) => {
    console.log(file, productId);
  };
}

export default ProductsController;
