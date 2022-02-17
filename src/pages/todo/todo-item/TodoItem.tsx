import { Box } from 'components';
import { Todo } from '../types';
import styles from './TodoItem.module.scss';

export type Props = {
  item: Todo;
};

export default function TodoItem(props: Props) {
  const { item } = props;

  return (
    <Box key={item.id} className={styles.card}>
      <Box className={styles.container}>
        <p
          style={{
            fontSize: '0.8em',
            textDecoration: item.completed ? 'line-through' : 'none',
          }}>
          Title: {item.title}
        </p>
        <small style={{ fontSize: '0.7em' }}>
          Status: {item.completed ? 'Completed' : 'Not Completed'}
        </small>
      </Box>
    </Box>
  );
}
