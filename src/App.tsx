import { ThemeToggler } from 'components';
import { Counter } from 'pages/counter';
import { Todo } from 'pages/todo';
import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <React.Fragment>
      <header>
        <ThemeToggler />
      </header>
      <div className={styles.app}>
        <Counter />
        <Todo />
      </div>
    </React.Fragment>
  );
}
