import axios from "axios";
import ApiService from "../lib/services/api/ApiService";
import { AllProductsResponse } from "./interfaces";

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
}

export default ProductsApiService;
