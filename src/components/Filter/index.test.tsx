import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '.';
import { TaskListContext } from '../../context/taskListContext';

const renderWithContext = (filter: 'all' | 'active' | 'completed' = 'all', setFilter = jest.fn()) => {
  render(
    <TaskListContext.Provider
      value={{
        tasks: [],
        setTasks: () => {},
        filteredTasks: [],
        filter,
        setFilter,
        addTask: () => {},
        toggleTaskCompletion: () => {},
      }}
    >
      <Filter />
    </TaskListContext.Provider>
  );
};

test('renders all filter buttons and highlights selected', () => {
    renderWithContext('active');

    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /active/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /completed/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /active/i })).toHaveClass('bg-blue-100');
});

test('calls setFilter on button click', () => {
    const setFilterMock = jest.fn();
    renderWithContext('all', setFilterMock);

    fireEvent.click(screen.getByRole('button', { name: /active/i }));
    expect(setFilterMock).toHaveBeenCalledWith('active');

    fireEvent.click(screen.getByRole('button', { name: /completed/i }));
    expect(setFilterMock).toHaveBeenCalledWith('completed');
});
