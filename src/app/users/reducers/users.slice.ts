import { createSlice } from "@reduxjs/toolkit";
import { UsersResponse } from "../interfaces";
const initialState:UsersResponse = {
   
  };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;