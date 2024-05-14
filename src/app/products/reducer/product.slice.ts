import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllProductsResponse, Product } from "../interfaces";

const initialState: Product = {
  _id: "",
  createAt: "",
  creator: {
    _id: "",
    createAt: "",
    email: "",
    password: "",
    role: "",
    username: "",
  },
  files: [],
  name: "",
  off_precent: 0,
  off_price: 0,
  price: 0,
  total_sales: 0,
  updatedAt: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      // return action.payload;
      return action.payload;
    },

    reInit() {
      return initialState;
    },
  },
});
export const productSliceActions = productSlice.actions;

export default productSlice.reducer;
