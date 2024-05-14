import ApiService from "../lib/services/api/ApiService";
import { CategoriesResponse } from "./interfaces";

class CategoriesApiService extends ApiService {
  constructor() {
    super("categories");
  }
  async getCategories(): Promise<CategoriesResponse> {
    const result = await this.$axios.get("/");

    return result.data;
  }
  async getSubCategories(parentId: string): Promise<CategoriesResponse> {
    const result = await this.$axios.get(`/?parentId=${parentId}`);

    return result.data;
  }
}

export default CategoriesApiService;
