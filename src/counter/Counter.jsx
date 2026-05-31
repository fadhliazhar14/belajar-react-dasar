import { useState } from "react";

export default function Counter({ name }) {
    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>{name} : {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}