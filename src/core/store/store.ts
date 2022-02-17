import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/rootReducers';
import rootSaga from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware({
  onError: (err) => {
    console.error('Uncaught error in one of the sagas', err);
    // log error to an error reporting service
  },
});

export const store = configureStore({
  // don't need to define combineReducers, because createStore does it for us
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
