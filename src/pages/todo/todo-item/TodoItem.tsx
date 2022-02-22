import { Box } from 'components';
import { Todo } from '../types';
import styles from './TodoItem.module.scss';
import { useAppDispatch } from 'core/store';
import { changeStatus } from '../slice';

export type Props = {
  item: Todo;
};

export default function TodoItem(props: Props) {
  const { item } = props;
  const dispatch = useAppDispatch();
  const statusChangeHandler = (e: any) => {
    dispatch(changeStatus(item.id))
  }

  return (
    <Box key={item.id} className={styles.card}>

      <label className={styles.checkItems}>
        <input
          checked={item.completed ? true : false}
          onClick={statusChangeHandler}
          type="checkbox"
        />
        <p
          style={{
            textDecoration: item.completed ? 'line-through' : 'none',
          }}>
          {item.title}
        </p>
      </label>

    </Box>
  );
}
