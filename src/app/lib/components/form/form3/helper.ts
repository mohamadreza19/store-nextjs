import { Category } from "@/app/categories/interfaces";
import {
  Product,
  UpdateProductBody,
  UpdateProductFormikValues,
} from "@/app/products/interfaces";

import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  name: Yup.string().required("نام محصول ضروری است"),
  price: Yup.mixed().required("قیمت ضروری است"),
  category: Yup.string().required("دسته بندی ضروری است"),
});

type SetSubCategoryId = (categoryId: string) => void;
export interface Form1Props {
  handleFormSubmit: (
    values: UpdateProductFormikValues,
    productId: string
  ) => void;
  fetchSubCategoriesByParentId: SetSubCategoryId;
  pushFileForProduct: (file: File, productId: string) => void;
  pullProductFile: (fileId: string, productId: string) => void;
  onClose: () => void;
  categories: Category[];
  subCategories: Category[];
  product: Product;
}
