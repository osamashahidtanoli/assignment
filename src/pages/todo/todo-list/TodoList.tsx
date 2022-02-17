import { Grid } from 'components';
import React from 'react';
import TodoItem from '../todo-item/TodoItem';
import { Todo } from '../types';

export type Props = {
  items: Todo[];
};

export default function TodoList(props: Props) {
  const { items } = props;

  return (
    <React.Fragment>
      {items.map((item) => (
        <Grid item xs={12} sm={12} key={item.id}>
          <TodoItem item={item} />
        </Grid>
      ))}
    </React.Fragment>
  );
}
