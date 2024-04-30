import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
}
const initialState: InitialState = {
  loading: false,
};

const pluse_loading = createSlice({
  name: 'pluseLoading',
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

export const { add, remove } = pluse_loading.actions;
export default pluse_loading.reducer;
