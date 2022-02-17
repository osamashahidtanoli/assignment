import { createSlice, PayloadAction } from 'core/store';
import { Todo, TodoState } from './types';

const initialState: TodoState = {
  items: [],
  isLoading: false,
  apiError: null,
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    fetchTodo: (state) => {
      state.apiError = null;
      state.isLoading = true;
    },
    fetchTodoSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchTodoFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.apiError = action.payload;
    },
  },
});

const { fetchTodo, fetchTodoSuccess, fetchTodoFailure } = slice.actions;

const reducer = slice.reducer;
export { reducer, fetchTodo, fetchTodoSuccess, fetchTodoFailure };
