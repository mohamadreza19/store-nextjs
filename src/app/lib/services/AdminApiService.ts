import axios from 'axios';
import config from 'config';

const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

class AdminApiService {
  $axios = axiosInstance;
  async login(body: any) {
    return this.$axios.post('/');
  }
}

export default AdminApiService;
