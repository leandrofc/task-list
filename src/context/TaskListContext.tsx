import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TaskType } from '../types/task';

type TaskContextType = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  addTask: (title: string) => void;
};

const taskList: TaskType[] = [
    {
        id: "b40fc082-2857-4cbb-8462-d2c3fda441c2",
        title: "Study",
        createdAt: "2025-07-24T23:09:08.675Z",
        completedAt: "2025-07-24T23:09:08.675Z",
    },
    {
        id: "c6f41d3e-9e70-41a7-9f1d-5a135ecf2c99",
        title: "Go to the gym",
        createdAt: "2025-07-24T23:09:08.675Z",
        completedAt: null,
    },
];

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
