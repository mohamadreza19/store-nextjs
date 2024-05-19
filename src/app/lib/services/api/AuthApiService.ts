import axios, { AxiosInstance } from "axios";
import config from "@/config";
import TokenStorageService from "../TokenStorageService";
import ApiService from "./ApiService";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

class AuthApiService extends ApiService {
  constructor() {
    super("auth");
  }
  async login(body: any): Promise<LoginResponse> {
    const result = await this.$axios.post("sing-in", body);

    return result.data;
  }
}

export default AuthApiService;
