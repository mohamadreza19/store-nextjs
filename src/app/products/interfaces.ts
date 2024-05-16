import { User } from "../admin/interfaces";
import { Category } from "../categories/interfaces";
import ProductsController from "./products.controller";
import ProductsService from "./products.service";

export type Product = {
  _id: string;
  name: string;
  category: Category;
  creator: User;
  price: number;
  off_price: number;
  off_precent: number;
  total_sales: number;
  files: string[];
  createAt: string;
  updatedAt: string;
};

export type AllProductsResponse = {
  data: Product[];
  meta: {
    total: number;
    pages: number;
    page: number;
  };
};
export interface CreateProductBody {
  name: string;
  price: number;
  category: string;
}

export interface UpdateProductBody extends CreateProductBody {}
export type CreateProductFormikValues = {
  file: null | File;
  name: string;
  price: string | number;
  category: string;
};
export type UpdateProductFormikValues = {
  name: string;
  price: string | number;
  category: string;
};
export type CreateProductResponse = {
  name: string;
  creator: string;
  price: 0;
  files: [];
  off_price: 0;
  off_precent: 0;
  _id: string;
  createAt: string;
  updatedAt: string;
  __v: 0;
};
export type ProductsInjectionEntities = {
  productsService: ProductsService;
  productsController: ProductsController;
};

export type SelectModal = "modal1" | "modal2";
