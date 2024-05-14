import axios from 'axios';
import ApiService from '../lib/services/api/ApiService';
import { AllUsersResponse, StatisticsResponse } from './interfaces';

class AdminApiService extends ApiService {
  constructor() {
    super('admin');
  }
  async getStatistics(): Promise<StatisticsResponse> {
    const result = await this.$axios.get('statistics');

    return result.data;
  }
  async getAllUsers(
    page: number,
    limit: number = 10,
    search: string
  ): Promise<AllUsersResponse> {
    const result = await this.$axios.get(
      `users?page=${page}&limit=${limit}&search=${search}`
    );

    return result.data;
  }
  async getAllProducts() {}
}

export default AdminApiService;
