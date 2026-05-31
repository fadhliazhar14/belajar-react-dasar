import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
    // Cara reset state dengan memanfaatkan key dari component

    const [show, setShow] = useState(true);

    function handleShow(e) {
        setShow(e.target.checked);
    }

    return (
        <div>
            {show ? <Counter key="counter1" name="Fadhli" /> : <Counter key="counter2" name="Azhar" />}

            <input type="checkbox" checked={show} onChange={handleShow} /> Reset state counter
        </div>
    )
}