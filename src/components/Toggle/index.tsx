import { Check } from "react-feather";
import type ToggleProps from "./index.types";
import { useTaskList } from "../../context/taskListContext";

const Toggle = ({ isSelected, id  }: ToggleProps) => {
    const { toggleTaskCompletion } = useTaskList();

    return (
        <button
            className={`flex items-center justify-center w-11 h-11 rounded-xl ${isSelected ? 'bg-green-100 border-none' : 'bg-white border border-dashed border-gray-300'}`}
            onClick={() => toggleTaskCompletion(id)}
        >
            <Check
                className={`
                    flex-shrink-0
                    ${isSelected ? "text-green-700" : "text-gray-300"}
                `}
                size={20}
                data-testid="icon"
            />
        </button>
    )
}

export default Toggle;