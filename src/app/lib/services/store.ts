import { configureStore } from "@reduxjs/toolkit";
import { DismissAlert, ListAlerts } from "../features/alert";
import { PluseLoading } from "../features/loading";

import { product, products } from "@/app/products/reducer";
import { categories } from "@/app/categories/reducers";
import apiCallStatus from "../features/apiCallStatus/apiCallStatus";
import { users } from "@/app/users/reducers";

const store = configureStore({
  reducer: {
    apiCallStatus,
    list_alerts: ListAlerts.reducer,
    dismiss_alert: DismissAlert.reducer,
    pluse_loading: PluseLoading.reducer,
    products,
    product,
    categories,
    users,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
