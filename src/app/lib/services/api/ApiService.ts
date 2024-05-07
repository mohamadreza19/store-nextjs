import axios, { AxiosDefaults, AxiosError, AxiosInstance } from "axios";
import config from "config";
import TokenStorageService from "../TokenStorageService";
import LoadingService from "../LoadingService";

type UrlExtension =
  | "auth"
  | "admin"
  | "users"
  | "products"
  | "files"
  | "categories";

enum HttpStatus {
  UNAUTHORIZED = 401,
}

class ApiService {
  public $axios: AxiosInstance;
  private tokenStorageService = new TokenStorageService();
  private loadingService = new LoadingService();

  constructor(urlExtension: UrlExtension) {
    this.$axios = axios.create({
      baseURL: config.BASE_URL + "/" + urlExtension,
      headers: {
        Authorization: "Bearer " + this.tokenStorageService.getAccessToken(),
      },
    });
    this.$axios.interceptors.request.use(
      (config) => {
        this.loadingService.addPluse();
        // Do something before request is sent
        return config;
      },
      (error) => {
        this.loadingService.removePluse();

        // Do something with request error
        return Promise.reject(error);
      }
    );
    this.$axios.interceptors.response.use(
      (config) => {
        this.loadingService.removePluse();
        // Do something before request is sent

        return config;
      },
      async (error: AxiosError) => {
        if (error.response?.status === HttpStatus.UNAUTHORIZED) {
          const token = await this.refreshToken();
          if (token) {
            this.tokenStorageService.setAccessToken(token);
            window.location.reload();
          } else {
            this.tokenStorageService.setAccessToken("");
            this.tokenStorageService.setRefreshToken("");
          }
        }
        this.loadingService.removePluse();
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }
  private async refreshToken(): Promise<string | undefined> {
    try {
      const result = await axios.get(
        config.BASE_URL +
          "/auth/refresh-token/" +
          this.tokenStorageService.getRefreshToken()
      );

      return result.data;
    } catch (error) {
      return undefined;
    }
  }
}
export default ApiService;
