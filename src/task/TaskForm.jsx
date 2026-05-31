import { useState } from "react";

export default function Task({ onSubmit }) {
    const [item, setItem] = useState("");

    function handleInputChange(e) {
        setItem(e.target.value);
    }

    function handleAddItem(e) {
        e.preventDefault();

        onSubmit(item)

        setItem("");
    }

    return (
        <div>
            <h3>Create List</h3>

            <form>
                <input value={item} placeholder="Input new task.." onChange={handleInputChange} />
                <button onClick={handleAddItem} style={{ marginLeft: '10px' }}>Add Task</button>
            </form>
        </div>
    )
}