import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersCoreInfoResponse } from "../interfaces";
const initialState: UsersCoreInfoResponse = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add(state, action: PayloadAction<UsersCoreInfoResponse>) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
