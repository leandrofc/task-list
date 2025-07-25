import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TaskType } from '../types/task';
import { taskList } from '../data/taskList';
import type { TaskContextType } from '../types/taskContextTypes';

const TaskListContext = createContext<TaskContextType | undefined>(undefined);

export const TaskListProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(taskList);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (title: string) => {
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      title,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, setTasks, filter, setFilter, addTask }}>
      {children}
    </TaskListContext.Provider>
  );
};

export const useTaskList = () => {
  const context = useContext(TaskListContext);
  if (!context) throw new Error('useTaskList must be used within TaskListProvider');
  return context;
};
