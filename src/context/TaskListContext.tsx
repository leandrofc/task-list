import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { TaskType } from '../types/task';
import { taskList } from '../data/taskList';
import type { TaskContextType } from '../types/taskContextTypes';

const TaskListContext = createContext<TaskContextType | undefined>(undefined);

export const TaskListProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(taskList);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = useCallback((title: string) => {
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      title,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    setTasks(prev => [...prev, newTask]);
  }, []);

  const toggleTaskCompletion = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
  
        const isCompleted = Boolean(task.completedAt);
        const dateNow = new Date().toISOString();

        return {
          ...task,
          completedAt: isCompleted ? null : dateNow,
        };
      })
    );
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (filter === 'active') return !task.completedAt;
      if (filter === 'completed') return !!task.completedAt;
      return true;
    });
  }, [tasks, filter]);
  
  return (
    <TaskListContext.Provider value={{
      tasks,
      setTasks,
      filteredTasks,
      filter,
      setFilter,
      addTask,
      toggleTaskCompletion
    }}>
      {children}
    </TaskListContext.Provider>
  );
};

export const useTaskList = () => {
  const context = useContext(TaskListContext);
  if (!context) throw new Error('useTaskList must be used within TaskListProvider');
  return context;
};
