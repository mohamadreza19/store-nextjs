import axios from "axios";
import ApiService from "../lib/services/api/ApiService";
import {
  AllProductsResponse,
  CreateProductBody,
  CreateProductResponse,
  Product,
} from "./interfaces";

class ProductsApiService extends ApiService {
  constructor() {
    super("products");
  }
  async getAllProducts(
    page: number,
    limit: number = 10,
    search: string
  ): Promise<AllProductsResponse> {
    const result = await this.$axios.get(
      `?page=${page}&limit=${limit}&search=${search}`
    );

    return result.data;
  }
  async getProductById(id: string): Promise<Product> {
    const result = await this.$axios.get("/" + id);

    return result.data;
  }
  async createProduct(
    values: CreateProductBody
  ): Promise<CreateProductResponse> {
    const result = await this.$axios.post("/", values);

    return result.data;
  }
  async removeProductById(productId: string) {
    await this.$axios.delete("/" + productId);
  }
}

export default ProductsApiService;
