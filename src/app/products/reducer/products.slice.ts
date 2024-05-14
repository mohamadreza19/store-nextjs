import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { AllProductsResponse, Product } from "../interfaces";

const initialState: AllProductsResponse = {
  data: [],
  meta: {
    page: 0,
    pages: 0,
    total: 0,
  },
};

const productsSlice = createSlice({
  name: "admin-products",
  initialState,
  reducers: {
    add(state, action: PayloadAction<AllProductsResponse>) {
      // return action.payload;
      state.data = state.data.concat(action.payload.data);
      state.meta = action.payload.meta;
    },
    removeProductById(state, action: PayloadAction<string>) {
      state.data = state.data.filter(
        (product) => product._id !== action.payload
      );
    },
    replaceProduct(state, action: PayloadAction<Product>) {
      // const copy = [...current(state.data)];
      // const findProductIndex = state.data.findIndex(
      //   (p) => p._id === action.payload._id
      // );
      // const findProductIndex = copy.findIndex(
      //   (p) => p._id === action.payload._id
      // );
      // console.log(findProductIndex);
      // copy.splice(findProductIndex, 1, action.payload);
      // console.log(copy);
    },
    reInit() {
      return initialState;
    },
  },
});
export const productsSliceActions = productsSlice.actions;

export default productsSlice.reducer;
