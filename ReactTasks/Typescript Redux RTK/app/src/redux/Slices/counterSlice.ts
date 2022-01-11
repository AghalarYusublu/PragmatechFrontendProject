import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
})

export const { increment } = counterSlice.actions;


export default counterSlice.reducer;
