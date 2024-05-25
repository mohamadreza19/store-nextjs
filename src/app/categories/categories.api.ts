import ApiService from "../lib/services/api/ApiService";
import { CategoriesResponse } from "./interfaces";

class CategoriesApiService extends ApiService {
  constructor() {
    super("categories");
  }
  async getCategories(): Promise<CategoriesResponse> {
    const result = await this.queryClient.fetchQuery({
      queryKey: ["getCategories"],
      queryFn: async () => this.$axios.get("/"),
    });

    return result.data;
  }
  async getSubCategories(parentId: string): Promise<CategoriesResponse> {
    const result = await this.queryClient.fetchQuery({
      queryKey: ["getSubCategories", parentId],
      queryFn: async () => this.$axios.get(`/?parent_id=${parentId}`),
    });

    return result.data;
  }

  async getCategoryById(id: string): Promise<CategoriesResponse> {
    const result = await this.queryClient.fetchQuery({
      queryKey: ["getCategoryById", id],
      queryFn: async () => this.$axios.get("/" + id),
    });

    return result.data;
  }
}

export default CategoriesApiService;
