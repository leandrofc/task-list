import TaskItem from "../TaskItem";

const TaskList = () => {
    return (
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto mt-6 mb-6 p-3 items-center bg-gray-100 w-full border border-dashed rounded-xl border-gray-300">
            <TaskItem title="Study" date="22/07/2025 - 23/07/2025" isCompleted />
            <TaskItem title="Go to the gym" date="22/07/2025" />
        </div>
    )
}

export default TaskList;