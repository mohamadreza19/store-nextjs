import { User } from "../admin/interfaces";
import ProductsController from "./products.controller";
import ProductsService from "./products.service";

export type Product = {
  _id: string;
  name: string;
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
export type ProductsInjectionEntities = {
  productsService: ProductsService;
  productsController: ProductsController;
};
