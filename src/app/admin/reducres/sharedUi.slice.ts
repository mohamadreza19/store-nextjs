import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SharedUi, State } from "../interfaces";

const initialState: SharedUi = {
  shouldRenderSharedSideBar: false,
};

const sharedUiSlice = createSlice({
  name: "admin-sharedUi",
  initialState,
  reducers: {
    openSharedUi(state) {
      state.shouldRenderSharedSideBar = true;
    },
    closeSharedUi(state) {
      state.shouldRenderSharedSideBar = false;
    },
  },
});

export const sharedUiSliceActions = sharedUiSlice.actions;

export default sharedUiSlice.reducer;
