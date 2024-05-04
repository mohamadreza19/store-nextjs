import { ActionCreator, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllUsersResponse, State } from "../interfaces";
const initialState: AllUsersResponse = {
  data: [],
  meta: {
    page: 0,
    pages: 0,
    total: 0,
  },
};

const usersSlice = createSlice({
  name: "admin-users",
  initialState,
  reducers: {
    add(state, action: PayloadAction<AllUsersResponse>) {
      // return action.payload;
      state.data = state.data.concat(action.payload.data);
      state.meta = action.payload.meta;
    },

    reInit() {
      return initialState;
    },
  },
});
export const usersSliceActions = usersSlice.actions;

export default usersSlice.reducer;
