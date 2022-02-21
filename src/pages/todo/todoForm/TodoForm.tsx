import React from 'react';
import styles from './TodoForm.module.scss';
import { useAppDispatch } from '../../../core/store';
import { addNewTodo } from '../slice';




export default function TodoForm() {
    const dispatch = useAppDispatch();
    const [text, setText] = React.useState('');
    const textChangeHandler = (event: any) => {
      setText(event.target.value);
    }
    const submitTaskHandler = (event: any) => {
      dispatch(addNewTodo({
        id: Math.floor(Math.random() * 8),
        title: text,
        completed: false
      }));
      event.preventDefault();
    }

  return (
     <React.Fragment>
    <form onSubmit={submitTaskHandler} className={styles.form}>
        <input onChange={textChangeHandler} type="text" />
        <button>Add</button>
    </form>
    </React.Fragment>
  );
}
