import axios from "axios";

import {
  AllProductsResponse,
  CreateProductBody,
  CreateProductResponse,
  Product,
  UpdateProductBody,
} from "./interfaces";
import ApiService from "@lib/services/api/ApiService";

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
    values: UpdateProductBody
  ): Promise<CreateProductResponse> {
    const result = await this.$axios.post("/", values);

    return result.data;
  }
  async updateProduct(values: UpdateProductBody, productId: string) {
    const result = await this.$axios.put("/" + productId, values);
  }
  async removeProductById(productId: string) {
    await this.$axios.delete("/" + productId);
  }
}

export default ProductsApiService;
