import { configureStore } from '@reduxjs/toolkit';
import { list_alerts } from '../features/alert';
import { pluse_loading } from '../features/loading';

const store = configureStore({
  reducer: {
    list_alerts,
    pluse_loading,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
