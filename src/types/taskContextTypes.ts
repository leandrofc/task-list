import type { TaskType } from "./task";

export type TaskContextType = {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    filteredTasks: TaskType[];
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    addTask: (title: string) => void;
    toggleTaskCompletion: (id: string) => void;
};