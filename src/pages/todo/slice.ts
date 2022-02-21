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
      const newItem = action.payload;
      state.items = [...state.items, newItem]
    },
    changeStatus(state, action: PayloadAction<any>){
      const id = action.payload;
      // const indexOfCompleted = state.items.findIndex((item) => item.id === id);
      // const findItem = state.items.find((item) => item.id === id);
      // console.log(indexOfCompleted)
      // const completedItem = {...findItem, completed:true};
      // state.items[indexOfCompleted] = completedItem;
      // console.log(completedItem)
      state.items.map((item) => item.id == id ? item.completed = true : item)
      
    }
  },
});

const { fetchTodo, fetchTodoSuccess, fetchTodoFailure, addNewTodo, changeStatus } = slice.actions;

const reducer = slice.reducer;
export { reducer, fetchTodo, fetchTodoSuccess, fetchTodoFailure, addNewTodo, changeStatus };
