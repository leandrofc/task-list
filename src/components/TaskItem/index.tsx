import { Calendar } from "react-feather";
import type TaskItemProps from "./index.types";
import Toggle from "../Toggle";


const TaskItem = ({ title, date, isCompleted }: TaskItemProps) => {
    return (
      <div className="flex justify-between w-full p-3 rounded-xl shadow-[1px_2px_3.8px_0px_rgba(0,0,0,0.09)]">
        <div className="flex items-center gap-3 h-11">
            <div className={`w-3 h-full rounded-l-md ${isCompleted ? "bg-green-100": "bg-orange-100"}`} />
            <div className="flex flex-col">
                <p className="text-md text-black font-bold">
                    {title}
                </p>

                <div className="flex gap-1 items-center">
                    <Calendar size={12} className="text-gray-700" />
                    <p className="text-sm font-bold text-gray-700">
                        {date}
                    </p>
                </div>
            </div>
        </div>

        <Toggle isSelected={isCompleted} />

      </div>
    )
}

export default TaskItem;