import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TaskType } from '../types/task';

type TaskContextType = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
};

const taskList: TaskType[] = [
    {
        id: "1",
        title: "Study",
        createdAt: "22/07/2025",
        completedAt: "23/07/2025",
    },
    {
        id: "2",
        title: "Go to the gym",
        createdAt: "22/07/2025",
        completedAt: null,
    },
];

const TaskListContext = createContext<TaskContextType | undefined>(undefined);

export const TaskListProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(taskList);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  return (
    <TaskListContext.Provider value={{ tasks, setTasks, filter, setFilter }}>
      {children}
    </TaskListContext.Provider>
  );
};

export const useTaskList = () => {
  const context = useContext(TaskListContext);
  if (!context) throw new Error('useTaskList must be used within TaskListProvider');
  return context;
};
