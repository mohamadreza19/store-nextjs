import { createSlice } from "@reduxjs/toolkit";
import { AuthResponse } from "../interfaces";
const initialState:AuthResponse = {
   
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;