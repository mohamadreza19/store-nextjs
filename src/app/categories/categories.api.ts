import ApiService from "../lib/services/api/ApiService";
import { AllCategoriesResponse } from "./interfaces";

class CategoriesApi extends ApiService {
  constructor() {
    super("categories");
  }

  async getCategories(): Promise<AllCategoriesResponse> {
    const result = await this.$axios("/");
    return result.data;
  }
}
export default CategoriesApi;
