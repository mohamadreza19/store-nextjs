import axios from "axios";
import config from "config";

const axiosInstance = axios.create({
  baseURL: config.BASE_URL + "/auth",
});

class AuthApiService {
  $axios = axiosInstance;
  constructor() {}
  async login(body: any) {
    return this.$axios.post("sing-in", body);
  }
}

export default AuthApiService;
