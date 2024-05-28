import ApiService from "../lib/services/api/ApiService";
import { UsersResponse } from "./interfaces";

class UsersApiService extends ApiService {
  constructor() {
    super("users");
  }
  async getUsers(): Promise<UsersResponse> {
    const result = await this.$axios.get("/");

    return result.data;
  }
  async getCoreInfo(): Promise<UsersResponse> {
    const result = await this.$axios.get("/core-info");

    return result.data;
  }
}

export default UsersApiService;
