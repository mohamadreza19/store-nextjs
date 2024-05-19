import axios, { AxiosDefaults, AxiosError, AxiosInstance } from "axios";
import config from "config";
import TokenStorageService from "../TokenStorageService";
import LoadingService from "../LoadingService";
import GlobalStoreService from "../GlobalStoreService";

type UrlExtension =
  | "auth"
  | "admin"
  | "users"
  | "products"
  | "files"
  | "categories"
  | "home";

enum HttpStatus {
  UNAUTHORIZED = 401,
}

class ApiService {
  protected $axios: AxiosInstance;
  private tokenStorageService = new TokenStorageService();
  private loadingService = new LoadingService();
  private globalStoreService = new GlobalStoreService();

  constructor(urlExtension: UrlExtension) {
    this.$axios = axios.create({
      baseURL: config.BASE_URL + "/" + urlExtension,
      headers: {
        Authorization: "Bearer " + this.tokenStorageService.getAccessToken(),
      },
    });
    this.$axios.interceptors.request.use(
      (config) => {
        this.globalStoreService.addApiStatus({
          status: "loading",
        });
        // Do something before request is sent
        return config;
      },
      (error) => {
        console.log(error);
        // this.globalStoreService.addApiStatus({
        //   status: "error",
        //   errorMsg: error,
        // });

        // Do something with request error
        return Promise.reject(error);
      }
    );
    this.$axios.interceptors.response.use(
      (config) => {
        this.globalStoreService.addApiStatus({ status: "idle" });
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
        const errorMsg = (error.response?.data as { error: string }).error;

        this.globalStoreService.addApiStatus({
          status: "error",
          error: {
            message: errorMsg,
            statusCode: error.response?.status as number,
          },
        });
        // this.loadingService.removePluse();
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
