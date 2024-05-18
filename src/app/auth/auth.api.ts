import ApiService from "@/lib/services/api/ApiService";
import { AuthResponse, AuthVerifyCodeResponse } from "./interfaces";

class AuthApiService extends ApiService {
  constructor() {
    super("auth");
  }
  async getAuth(): Promise<AuthResponse> {
    const result = await this.$axios.get("/");

    return result.data;
  }
  async sendVerifyCode(email: string): Promise<AuthVerifyCodeResponse> {
    const result = await this.$axios.post("/send-code", {
      email,
    });

    return result.data;
  }
}

export default AuthApiService;
