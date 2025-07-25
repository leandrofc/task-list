import { Button } from "../Button";
import { useTaskList } from "../../context/taskListContext";

const Filter = () => {
    const { filter, setFilter } = useTaskList();

    return (
        <div className="flex gap-4">
            <Button
                text="All"
                onClick={() => setFilter('all')}
                variant="ghost"
                size="small"
                isSelected={filter === "all"}
            />
            <Button
                text="Active"
                onClick={() => setFilter('active')}
                variant="ghost"
                size="small"
                isSelected={filter === "active"}
            />
            <Button
                text="Completed"
                onClick={() => setFilter('completed')}
                variant="ghost"
                size="small"
                isSelected={filter === "completed"}
            />
        </div>
    )
}

export default Filter;