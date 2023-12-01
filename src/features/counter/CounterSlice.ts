import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value:0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //it's ok to 'change state' because of immer - it implicitly makes copies under the hood
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
  }
});

export const { incremented } = counterSlice.actions;
export const { amountAdded } = counterSlice.actions;
export default counterSlice.reducer;