import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UsersCoreInfoResponse } from "../interfaces";
const initialState: IUser = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add(state, action: PayloadAction<UsersCoreInfoResponse>) {
      state.coreInfo = action.payload;
    },
    changeAuthenticationStatus(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    reInitial(state) {
      return initialState;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
