export interface TodoState {
  items: Todo[];
  isLoading: boolean;
  apiError: string | null;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
