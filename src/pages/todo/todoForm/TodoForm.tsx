import React from 'react';
import styles from './TodoForm.module.scss';
import { useAppDispatch } from '../../../core/store';
import { addNewTodo } from '../slice';
// import { sendTodoData } from '../todo-action';


export default function TodoForm() {
  const dispatch = useAppDispatch();
  const [text, setText] = React.useState('');
  const textChangeHandler = (event: any) => {
    setText(event.target.value);
  };
  const submitTaskHandler = async (event: any) => {
    event.preventDefault();
    dispatch(addNewTodo(text));
    console.log(addNewTodo.type);
    setText('');
  };
  return (
    <React.Fragment>
      <form onSubmit={submitTaskHandler} className={styles.form}>
        <input value={text} onChange={textChangeHandler} type="text" />
        <button>Add</button>
      </form>
    </React.Fragment>
  );
}
