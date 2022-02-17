import React from 'react';
import { useAppDispatch, useAppSelector } from 'core/store';
import { fetchTodo } from '../slice';
import { getAllTodoItems, getCompletedTodoItems } from '../selectors';

export default function useTodo() {
  const items = useAppSelector(getAllTodoItems);
  const completedItems = useAppSelector(getCompletedTodoItems);
  const isLoading = useAppSelector((state) => state.todo.isLoading);
  const apiError = useAppSelector((state) => state.todo.apiError);
  const dispatch = useAppDispatch();

  const fetchData = React.useCallback(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    items,
    completedItems,
    isLoading,
    apiError,
    fetchData,
  };
}
