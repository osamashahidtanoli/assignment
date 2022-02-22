import { render, screen } from 'testing.utils';
import userEvent from '@testing-library/user-event';
import TodoForm from './TodoForm';
import { useAppDispatch } from 'core/store';

describe('TodoForm', () => {
  // beforeEach(() => {
  // useAppDispatch.mockImplementation(() => jest.fn());
  // })

  it('should dispatch', () => {
    render(<TodoForm />);
    const btn = screen.getByText('Add');
    userEvent.click(btn);
    expect(useAppDispatch).toHaveBeenCalled();
  });
});
