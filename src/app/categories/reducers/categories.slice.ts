import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesResponse } from "../interfaces";
const initialState: {
  main: CategoriesResponse;
  sub: CategoriesResponse;
} = {
  main: [],
  sub: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addMain(state, action: PayloadAction<CategoriesResponse>) {
      state.main = action.payload;
    },
    addSub(state, action: PayloadAction<CategoriesResponse>) {
      state.sub = action.payload;
    },
    reInitSub(state) {
      state.sub = initialState.sub;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
