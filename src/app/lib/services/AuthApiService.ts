import axios, { AxiosInstance } from 'axios';
import config from 'config';
import TokenStorageService from './TokenStorageService';

const axiosInstance = axios.create({
  baseURL: config.BASE_URL + '/auth',
});

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

class AuthApiService {
  private $axios: AxiosInstance;

  constructor() {
    this.$axios = axiosInstance;
  }
  async login(body: any): Promise<LoginResponse> {
    const result = await this.$axios.post('sing-in', body);

    return result.data;
  }
}

export default AuthApiService;
