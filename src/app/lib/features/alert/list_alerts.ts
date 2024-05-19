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
export type AddPayload_ = Item;

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

namespace ListAlerts {
  export const reducer = list_alerts.reducer;
  export const Actions = list_alerts.actions;
  export type AddPayload = AddPayload_;
}
export default ListAlerts;
