import { createSlice, PayloadAction } from 'core/store';
// import { iteratorSymbol } from 'immer/dist/internal';
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
    addNewTodo(state, action: PayloadAction<any>){
      const newItemText = action.payload;
      // state.items = [...state.items, newItem]
      state.items?.push({
        id: Math.floor(Math.random() * 100),
        title: newItemText,
        completed: false
      })
    },
    changeStatus(state, action: PayloadAction<any>){
      const id = action.payload;
      state.items.map((item) => item.id == id ? item.completed = !item.completed : item)
      
    }
  },
});

const { fetchTodo, fetchTodoSuccess, fetchTodoFailure, addNewTodo, changeStatus } = slice.actions;

const reducer = slice.reducer;
export { reducer, fetchTodo, fetchTodoSuccess, fetchTodoFailure, addNewTodo, changeStatus };
