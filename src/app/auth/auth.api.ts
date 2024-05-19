import ApiService from "@lib/services/api/ApiService";
import {
  AuthResponse,
  AuthSendVerifyCodeResponse,
  AuthVerifyCodeResponse,
} from "./interfaces";

class AuthApiService extends ApiService {
  constructor() {
    super("auth");
  }
  async getAuth(): Promise<AuthResponse> {
    const result = await this.$axios.get("/");

    return result.data;
  }
  async sendVerifyCode(email: string): Promise<AuthSendVerifyCodeResponse> {
    const result = await this.$axios.post("/send-code", {
      email,
    });

    return result.data;
  }
  async VerifyCode(code: string): Promise<AuthVerifyCodeResponse> {
    const result = await this.$axios.post("/verify-code", {
      code,
    });

    return result.data;
  }
}

export default AuthApiService;
