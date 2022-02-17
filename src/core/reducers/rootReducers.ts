import { counterSlice } from 'pages/counter';
import { todoSlice } from 'pages/todo';

const rootReducers = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
};

export default rootReducers;
