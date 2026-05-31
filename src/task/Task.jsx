import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleInputChange(e) {
        setItem(e.target.value);
    }

    function handleAddItem(e) {
        e.preventDefault();

        setItems(items => {
            items.push(item);
        });

        setItem("");
    }

    return (
        <div>
            <h3>Create List</h3>

            <form>
                <input value={item} placeholder="Input new task.." onChange={handleInputChange} />
                <button onClick={handleAddItem} style={{ marginLeft: '10px' }}>Add Task</button>
            </form>

            <h3>Task List</h3>
            <ul>
                {
                    items.map((item, index) =>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}