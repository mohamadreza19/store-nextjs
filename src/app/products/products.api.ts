import axios from "axios";
import ApiService from "../lib/services/api/ApiService";

class ProductsApiService extends ApiService {
  constructor() {
    super("products");
  }
  async getAllProducts() {
    return this.$axios.get("/");
  }
}

export default ProductsApiService;
