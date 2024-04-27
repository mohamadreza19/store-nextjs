import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  title: string;
  type: "error" | "info";
  list: string[];
};

interface ListAlertsProps {
  items: Item[];
}
const initialState: ListAlertsProps = {
  items: [],
};
export type AddPayload = Item;

const list_alerts = createSlice({
  name: "alertlist",

  initialState,
  reducers: {
    add(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    remove(state) {
      if (state.items.length > 0) state.items.pop();
    },
  },
});

export const { add, remove } = list_alerts.actions;

export default list_alerts.reducer;
