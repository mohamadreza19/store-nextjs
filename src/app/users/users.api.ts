import ApiService from "../lib/services/api/ApiService";
import { UsersCoreInfoResponse } from "./interfaces";

class UsersApiService extends ApiService {
  constructor() {
    super("users");
  }
  async getUsers(): Promise<UsersCoreInfoResponse> {
    const result = await this.$axios.get("/");

    return result.data;
  }
  async getCoreInfo(): Promise<UsersCoreInfoResponse> {
    const result = await this.queryClient.fetchQuery({
      queryKey: ["getCoreInfo"],
      queryFn: () => this.$axios.get("/core-info"),
    });

    return result.data;
  }
}

export default UsersApiService;
