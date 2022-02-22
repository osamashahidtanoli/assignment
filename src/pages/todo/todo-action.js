// import { addNewTodo } from './slice';

export const sendTodoData = (text) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://localhost:5000/todos', {
        method: 'PUT',
        body: JSON.stringify({
          title: text,
          completed: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Sending data failed.');
      }
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};
