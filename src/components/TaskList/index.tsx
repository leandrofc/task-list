import { useTaskList } from "../../context/TaskListContext";
import TaskItem from "../TaskItem";

const TaskList = () => {
    const { filter, tasks } = useTaskList();

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.completedAt;
        if (filter === 'completed') return task.completedAt;
        return true;
    });

    return (
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto mt-6 mb-6 p-3 items-center bg-gray-100 w-full border border-dashed rounded-xl border-gray-300 md:max-w-[493px]">
            {
                filteredTasks?.map(({id, title, createdAt, completedAt}, index) => (
                    <TaskItem
                        key={id}
                        title={title}
                        date={`${createdAt} - ${completedAt}`}
                        isCompleted={!!completedAt}
                        index={index}
                    />
                ))
            }
        </div>
    )
}

export default TaskList;