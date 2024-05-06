import { configureStore } from "@reduxjs/toolkit";
import { ListAlerts } from "../features/alert";
import { PluseLoading } from "../features/loading";
import {
  adminSharedUi,
  adminStatistics,
  adminUsers,
} from "@/app/admin/reducres";
import { products } from "@/app/products/reducer";

const store = configureStore({
  reducer: {
    list_alerts: ListAlerts.reducer,
    pluse_loading: PluseLoading.reducer,
    adminSharedUi,
    adminStatistics,
    adminUsers,
    products,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
