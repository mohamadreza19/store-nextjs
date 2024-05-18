import { createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "../interfaces";

const loginStep = createSlice({
  name: "loginStep",
  initialState: 2,
  reducers: {
    stepIncrement(state) {
      return state + 1;
    },
    stepDecrement(state) {
      return state - 1;
    },
  },
});

export const loginStepActions = loginStep.actions;

export default loginStep.reducer;
