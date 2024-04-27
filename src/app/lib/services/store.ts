import { configureStore } from "@reduxjs/toolkit";
import { list_alerts } from "../features/alert";

const store = configureStore({
  reducer: {
    list_alerts,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
