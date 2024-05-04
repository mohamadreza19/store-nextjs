import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, StatisticsResponse } from "../interfaces";
const initialState: StatisticsResponse = {
  productCount: 0,
  userCount: 0,
};

const statisticsSlice = createSlice({
  name: "admin-statistics",
  initialState,
  reducers: {
    add(state, action: PayloadAction<StatisticsResponse>) {
      return action.payload;
    },
  },
});

export const statisticsSliceActtions = statisticsSlice.actions;

export default statisticsSlice.reducer;
