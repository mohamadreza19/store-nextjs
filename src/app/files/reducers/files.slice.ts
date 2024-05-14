import { createSlice } from "@reduxjs/toolkit";
import { FilesResponse } from "../interfaces";
const initialState:FilesResponse = {
   
  };

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const filesActions = filesSlice.actions;

export default filesSlice.reducer;