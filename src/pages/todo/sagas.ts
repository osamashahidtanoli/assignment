import { call, takeEvery, put, Effect, takeLatest } from 'redux-saga/effects';
import {
  fetchTodo,
  fetchTodoFailure,
  fetchTodoSuccess,
  addNewTodo,
} from './slice';
import { callAPI } from 'core/http';
import { Todo } from './types';

interface TodoResponse {
  data: Todo[];
  title: string;
}

export default function* todoSaga() {
  yield takeEvery(fetchTodo, fetchDataSaga);
  // yield takeEvery(addNewTodo, sendDataSaga);
}

export function* fetchDataSaga(): Generator<Effect, void, any> {
  // replace the below url with your own api url
  const url = 'http://localhost:5000/todos';
  try {
    const { data = [] }: TodoResponse = yield call(callAPI, { url });
    yield put(fetchTodoSuccess(data.slice(0, 8)));
  } catch (e: any) {
    const message = e.message || 'Something went wrong';
    yield put(fetchTodoFailure(message));
  }
}

// export function* sendDataSaga(action: {
//   payload: any;
// }): Generator<Effect, void, any> {
//   // replace the below url with your own api url
//   const url = 'http://localhost:5000/todos';
//   try {
//     const { payload } = action;
//     console.log(payload);
//     const response = yield call(() =>
//       fetch('http://localhost:5000/todos/1', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: payload,
//           completed: false,
//         }),
//         headers: {
//           'Content-type': 'application/json;'
//         }
//       }),
//     );
//     console.log(response)
//     const {data}  = yield response.json();
//     console.log(data);

//     yield put(addNewTodo({title: payload}));
//   } catch (e: any) {
//     const message = e.message || 'Something went wrong';
//     yield put(fetchTodoFailure(message));
//   }
// }
