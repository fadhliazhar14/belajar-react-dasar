import { useRef } from "react";

export default function AlertButton({ textLabel, message }) {
    const counter = useRef(0);

    function handleClick() {
        alert(`${message} ${counter.current++}`);
    }

    return (
        <button onClick={handleClick}>{textLabel}</button>
    )
}