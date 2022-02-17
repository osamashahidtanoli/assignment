import { createSelector, RootState } from 'core/store';

export const getAllTodoItems = createSelector(
  (state: RootState) => state.todo.items,
  (items) => items,
);

export const getCompletedTodoItems = createSelector(
  (state: RootState) => state.todo.items,
  (items) => items.filter((item) => item.completed),
);
