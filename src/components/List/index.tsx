import { useTaskList } from "../../context/taskListContext";
import { formatDateToMMDDYY } from "../../utils/formatDate";
import TaskItem from "../TaskItem";

const List = () => {
    const { filteredTasks} = useTaskList();

    return (
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto mt-6 mb-6 p-3 items-center bg-gray-100 w-full border border-dashed rounded-xl border-gray-300 md:max-w-[493px]">
            {
                filteredTasks?.map(({id, title, createdAt, completedAt}, index) => {
                    
                    const dataText = completedAt ? `${formatDateToMMDDYY(createdAt)} - ${formatDateToMMDDYY(completedAt)}` : formatDateToMMDDYY(createdAt);
                    
                    return(
                        <TaskItem
                            key={id}
                            title={title}
                            date={dataText}
                            isCompleted={!!completedAt}
                            index={index}
                            id={id}
                        />
                )})
            }
        </div>
    )
}

export default List;