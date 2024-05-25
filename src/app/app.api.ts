import ApiService from "@lib/services/api/ApiService";
import { AppResponse } from "./interfaces";

class AppApiService extends ApiService {
  constructor() {
    super("home");
  }
  async getApp(): Promise<AppResponse> {
    const result = await this.$axios.get("/");

    return result.data;
  }
}

export default AppApiService;
