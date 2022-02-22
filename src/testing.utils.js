// test-utils.jsx

import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { store } from './core/store';
// Import your own reducer
import { reducer } from 'pages/todo/slice';

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({ reducer: { todo: reducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }