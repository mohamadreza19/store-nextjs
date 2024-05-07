import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {},
  reducers: {},
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;
