import { useState } from "react";
import { Button } from "../Button";

const Filter = () => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="flex gap-4">
            <Button
                text="All"
                onClick={() => {setSelected(1)}}
                variant="ghost"
                size="small"
                isSelected={selected === 1}
            />
            <Button
                text="Active"
                onClick={() => {setSelected(2)}}
                variant="ghost"
                size="small"
                isSelected={selected === 2}
            />
            <Button
                text="Completed"
                onClick={() => {setSelected(3)}}
                variant="ghost"
                size="small"
                isSelected={selected === 3}
            />
        </div>
    )
}

export default Filter;