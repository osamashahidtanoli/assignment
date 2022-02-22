import React from 'react';
import styles from './TodoForm.module.scss';
import { useAppDispatch } from '../../../core/store';
import { addNewTodo } from '../slice';
import useHttp from '../hooks/useHttp';

export default function TodoForm() {
  const dispatch = useAppDispatch();
  const [text, setText] = React.useState('');
  const { sendRequest: sendTaskRequest } = useHttp();
  const textChangeHandler = (event: any) => {
    setText(event.target.value);
  };
  const submitTaskHandler = (event: any) => {
    dispatch(
      addNewTodo(text),
    );
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={submitTaskHandler} className={styles.form}>
        <input onChange={textChangeHandler} type="text" />
        <button>Add</button>
      </form>
    </React.Fragment>
  );
}
