import { configureStore } from "@reduxjs/toolkit";
import { DismissAlert, ListAlerts } from "../features/alert";
import { PluseLoading } from "../features/loading";
import {
  adminSharedUi,
  adminStatistics,
  adminUsers,
} from "@/app/admin/reducres";
import { product, products } from "@/app/products/reducer";
import { categories } from "@/app/categories/reducers";

const store = configureStore({
  reducer: {
    list_alerts: ListAlerts.reducer,
    dismiss_alert: DismissAlert.reducer,
    pluse_loading: PluseLoading.reducer,
    adminSharedUi,
    adminStatistics,
    adminUsers,
    products,
    product,
    categories,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
