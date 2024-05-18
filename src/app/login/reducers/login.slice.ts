import { createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "../interfaces";
const initialState:LoginResponse = {
   
  };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;