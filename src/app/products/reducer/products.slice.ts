import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllProductsResponse } from "../interfaces";

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

    reInit() {
      return initialState;
    },
  },
});
export const productsSliceActions = productsSlice.actions;

export default productsSlice.reducer;
