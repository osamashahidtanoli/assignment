import { reducer, addNewTodo } from './slice';

test('should handle a todo being added to an empty list', () => {
  const previousState = [{
    id: 0,
    title: 'Run the tests',
    completed: false,
  },
  ];
  expect(reducer(previousState, addNewTodo('Run the tests'))).toEqual([
    {
      id: 0,
      title: 'Run the tests',
      completed: false,
    }
  ])
})
