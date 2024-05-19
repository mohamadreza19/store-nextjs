import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiCallStatus } from "../../shared/interfaces";

const initialState: ApiCallStatus = {
  status: "idle",
  error: undefined,
};

const apiCallStatusSlice = createSlice({
  name: "apiCallStatus",
  initialState: initialState,
  reducers: {
    add(state, action: PayloadAction<ApiCallStatus>) {
      state.status = action.payload.status;

      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = initialState.error;
      }

      if (action.payload.status === "idle") {
        state.status = initialState.status;
        state.error = initialState.error;
      }
    },
  },
});

export const apiCallStatusSliceActions = apiCallStatusSlice.actions;
export default apiCallStatusSlice.reducer;
