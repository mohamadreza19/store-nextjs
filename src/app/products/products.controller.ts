import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { SetHasNextPage, SetPage, SetSearch } from "../lib/shared/interfaces";
import {
  CreateProductBody,
  CreateProductFormikValues,
  SelectModal,
  UpdateProductBody,
  UpdateProductFormikValues,
} from "./interfaces";
import ProductsApiService from "./products.api";
import ProductsService from "./products.service";

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

    this.productsService.reInitProducts();

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
      ?.classList.toggle("hidden");
    const result = await this.productsApiService.getProductById(id);

    this.productsService.replaceProductInProducts(result);
    this.productsService.setProduct(result);
  };
  toggleCreateProductModal = () => {
    console.log(this.productsService.modalId1);
    document
      .getElementById(this.productsService.modalId1)
      ?.classList.toggle("hidden");
  };
  createProduct = async (values: CreateProductFormikValues) => {
    const { category, file, name, price } = values;

    const productResult = await this.productsApiService.createProduct({
      name,
      category,
      price: Number((price as string).replace(/,/g, "")),
    });
    if (file)
      await this.filesApiService.uploadFile({
        entityId: productResult._id,
        entityType: "product",
        file: file,
      });

    const result = await this.productsApiService.getAllProducts(1, 10, "");

    this.productsService.reInitProducts();
    this.productsService.setProducts(result);

    document
      .getElementById(this.productsService.modalId1)
      ?.classList.toggle("hidden");

    setTimeout(() => {
      this.alertService.addDismissAlert({
        message: "محصول با موفقیت اضافه شد",
        open: true,
        type: "success",
      });
    }, 600);
  };
  updateProduct = async (
    values: UpdateProductFormikValues,
    productId: string
  ) => {
    await this.productsApiService.updateProduct(
      {
        ...values,
        price: Number((values.price as string).replace(/,/g, "")),
      },
      productId
    );

    const result = await this.productsApiService.getProductById(productId);

    this.toggleModales("modal2");

    this.productsService.replaceProductInProducts(result);
    this.productsService.setProduct(result);

    setTimeout(() => {
      this.alertService.addDismissAlert({
        message: "محصول با موفقیت ویرایش شد",
        open: true,
        type: "success",
      });
    }, 400);
  };
  removeProductById = async (productId: string) => {
    const result = this.productsService.getProductById(false, productId);
    console.log(result);
    await this.productsApiService.removeProductById(productId);
    this.productsService.removeProductById(productId);

    this.alertService.addDismissAlert({
      message: `محصول " ${result?.name} " با موففقیت حذف شد`,
      open: true,
      type: "blue",
    });
  };
  pushFileForProduct = async (file: File, productId: string) => {
    const result = await this.filesApiService.uploadFile({
      entityId: productId,
      entityType: "product",
      file: file,
    });

    const productResult = await this.productsApiService.getProductById(
      productId
    );

    this.productsService.replaceProductInProducts(productResult);
    this.productsService.setProduct(productResult);
  };
  pullProductFile = async (fileId: string, productId: string) => {
    const productState = this.productsService.getProductById(false, productId);

    if (productState?.files.length === 1) {
      this.alertService.addDismissAlert({
        message: "تعداد کمتر از یک فایل مجاز نیست",
        open: true,
        type: "error",
      });
      return;
    }

    await this.filesApiService.deleteFile({
      entityId: productId,
      entityType: "product",
      fileId: fileId,
    });

    const productResult = await this.productsApiService.getProductById(
      productId
    );

    this.productsService.replaceProductInProducts(productResult);
    this.productsService.setProduct(productResult);
  };

  private toggleModales = (modal: SelectModal) => {
    let selectedModal: string;

    switch (modal) {
      case "modal1":
        selectedModal = this.productsService.modalId1;
        break;
      case "modal2":
        selectedModal = this.productsService.modalId2;
        break;
    }

    document.getElementById(selectedModal)?.classList.toggle("hidden");
  };
}

export default ProductsController;
