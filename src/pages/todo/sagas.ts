import { call, takeEvery, put, Effect } from 'redux-saga/effects';
import { fetchTodo, fetchTodoFailure, fetchTodoSuccess } from './slice';
import { callAPI } from 'core/http';
import { Todo } from './types';

interface TodoResponse {
  data: Todo[];
}

export default function* todoSaga() {
  yield takeEvery(fetchTodo, fetchDataSaga);
}

export function* fetchDataSaga(): Generator<Effect, void, any> {
  // replace the below url with your own api url
  const url = 'https://jsonplaceholder.typicode.com/todos';
  try {
    const { data = [] }: TodoResponse = yield call(callAPI, { url });
    yield put(fetchTodoSuccess(data.slice(0, 5)));
  } catch (e: any) {
    const message = e.message || 'Something went wrong';
    yield put(fetchTodoFailure(message));
  }
}
