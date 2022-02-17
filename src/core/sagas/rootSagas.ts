import { all, Effect, fork } from 'redux-saga/effects';
import { todoSaga } from 'pages/todo';

export default function* rootSaga(): Generator<Effect, void, any> {
  yield all([fork(todoSaga)]);
}
