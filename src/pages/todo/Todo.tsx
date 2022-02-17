import { Box, Grid, Loading } from 'components';
import styles from './Todo.module.scss';
import useTodo from './hooks/useTodo';
import TodoList from './todo-list/TodoList';

export default function Todo() {
  const { items, completedItems, isLoading, apiError, fetchData } = useTodo();

  console.log('todoItem', items);

  if (apiError) {
    return (
      <Box>
        <p>{apiError}</p>
      </Box>
    );
  }

  return (
    <section className={styles.wrapper}>
      <h3>
        <u>Todo Component:</u>
      </h3>
      <button
        onClick={() => {
          fetchData();
        }}>
        Get Todos
      </button>
      <Grid container spacing="sm">
        <Grid item xs={12} sm={6}>
          <Box className={styles.wrapper}>
            <h5>All Todos:</h5>
            {isLoading ? (
              <Loading />
            ) : (
              <Grid container spacing="sm">
                <TodoList items={items} />
              </Grid>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={styles.wrapper}>
            <h5>Completed Todos:</h5>
            {isLoading ? (
              <Loading />
            ) : (
              <Grid container spacing="sm">
                <TodoList items={completedItems} />
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
