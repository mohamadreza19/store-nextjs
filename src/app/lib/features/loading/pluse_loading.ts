import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  loading: boolean;
}
const initialState: InitialState = {
  loading: true,
};

const pluse_loading = createSlice({
  name: "pluseLoading",
  initialState,
  reducers: {
    add(state) {
      state.loading = true;
    },
    remove(state) {
      state.loading = false;
    },
  },
});

namespace PluseLoading {
  export const reducer = pluse_loading.reducer;
  export const Actions = pluse_loading.actions;
}
export default PluseLoading;
