import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DismissAlertProps {
  open: boolean;
  type: "success" | "error" | "blue" | "black";
  message: string;
}
const initialState: DismissAlertProps = {
  open: false,
  type: "black",
  message: "",
};

const dismiss_alert = createSlice({
  name: "dismiss_alert",
  initialState: initialState,
  reducers: {
    add(state, payload: PayloadAction<DismissAlertProps>) {
      return payload.payload;
    },
    remove(state) {
      state.open = false;
      state.message = "";
    },
  },
});

namespace DismissAlert {
  export const reducer = dismiss_alert.reducer;
  export const Actions = dismiss_alert.actions;
  export type AddPayload = DismissAlertProps;
}
export default DismissAlert;
