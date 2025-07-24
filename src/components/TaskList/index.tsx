import TaskItem from "../TaskItem";

const TaskList = () => {
    return (
        <div className="flex flex-col gap-3 mt-10 mb-10 p-3 items-center bg-gray-100 w-full h-[600px] border border-dashed rounded-xl border-gray-300">
            <TaskItem title="Study" date="22/07/2025 - 23/07/2025" isCompleted />
            <TaskItem title="Go to the gym" date="22/07/2025" />
        </div>
    )
}

export default TaskList;