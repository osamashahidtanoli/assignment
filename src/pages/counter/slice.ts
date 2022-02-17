import { createSlice, PayloadAction } from 'core/store';
import { CounterState } from './types';

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // it's okay to mutate state here, because immer makes it
      // immutable for under the hood
      state.value += 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

const { increment, incrementBy, decrement, reset } = slice.actions;

const reducer = slice.reducer;
export { reducer, increment, incrementBy, decrement, reset };
