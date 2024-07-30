import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfirmationAlertProps {
  open: boolean;
  layout: "white";
  type: "logout";
  body: string;
  clickConfirm: () => void;
}
const initialState: ConfirmationAlertProps = {
  open: true,
  type: "logout",
  layout: "white",
  body: "",
  clickConfirm: () => {},
};

const confirmation_alert = createSlice({
  name: "confirmation_alert",
  initialState: initialState,
  reducers: {
    add(state, payload: PayloadAction<ConfirmationAlertProps>) {
      return payload.payload;
    },
    remove(state) {
      return initialState;
    },
  },
});

namespace ConfirmationAlert {
  export const reducer = confirmation_alert.reducer;
  export const Actions = confirmation_alert.actions;
  export type AddPayload = ConfirmationAlertProps;
}
export default ConfirmationAlert;
