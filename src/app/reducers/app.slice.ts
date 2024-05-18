import { createSlice } from "@reduxjs/toolkit";
import { AppResponse } from "../interfaces";
const initialState:AppResponse = {
   
  };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;