import { configureStore } from "@reduxjs/toolkit";
import { ListAlerts } from "../features/alert";
import { PluseLoading } from "../features/loading";
import {
  adminSharedUi,
  adminStatistics,
  adminUsers,
} from "@/app/admin/reducres";

const store = configureStore({
  reducer: {
    list_alerts: ListAlerts.reducer,
    pluse_loading: PluseLoading.reducer,
    adminSharedUi,
    adminStatistics,
    adminUsers,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
