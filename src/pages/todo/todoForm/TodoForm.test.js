import { render } from '@testing-library/react';
import TodoForm from './TodoForm';


test('adding', () => {
    render(<TodoForm/>);
    const taskForm = screen.getByText('one');
    expect(taskForm).toBeInTheDocument();
});