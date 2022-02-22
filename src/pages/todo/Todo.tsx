import { Box, Grid, Loading } from 'components';
import styles from './Todo.module.scss';
import useTodo from './hooks/useTodo';
import TodoList from './todo-list/TodoList';
import TodoForm from './todoForm/TodoForm';
import { MdList, MdOutlineChecklistRtl } from 'react-icons/md';
import React from 'react';




export default function Todo() {
  const { items, completedItems } = useTodo();
  const [tab, setTab] = React.useState('one');
  const [show, setShow] = React.useState(false);

  return (
    <section className={styles.todoWrapper}>
      {show && <TodoForm />}

      <div className={styles.todoBox}>
        <div className={styles.navTodo}>
          <div
            onClick={() => setTab('one')}
            className={`${styles.navItems}  ${
              tab === 'one' ? styles.active : ''
              }`}>
            <MdList />{' '}
          </div>
          <div
            onClick={() => setTab('two')}
            className={`${styles.navItems}  ${
              tab === 'two' ? styles.active : ''
              }`}>
            <MdOutlineChecklistRtl />
          </div>
        </div>
        {tab === 'one' && <TodoList items={items} />}
        {tab === 'two' && (
          <p>
            <TodoList items={completedItems} />
          </p>
        )}

        <button
          onClick={() => setShow((prevState) => !prevState)}
          className={styles.addBtn}>
          +
        </button>
      </div>
    </section>
  );
}
