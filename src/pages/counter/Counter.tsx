import { useAppSelector, useAppDispatch } from 'core/store';
import { increment, decrement, incrementBy } from './slice';
import { Box } from 'components';
import styles from './Counter.module.scss';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <section className={styles.wrapper}>
      <h3>
        <u>Counter Component:</u>
      </h3>
      <p>You clicked {count} times</p>
      <Box>
        <button
          onClick={() => {
            dispatch(increment());
          }}>
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}>
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementBy(5));
          }}>
          Increment by 5
        </button>
      </Box>
    </section>
  );
}
