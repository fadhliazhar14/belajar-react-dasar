import { useRef, useState } from "react";

export default function GuestBook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const nameInput = useRef(null);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setName("");
        setMessage("");

        nameInput.current.focus();

        alert(`Name: ${name}, Message: ${message}`);
    }

    return (
        <>
            <h1>Guest Book</h1>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" name="name" value={name} onChange={handleNameChange} ref={nameInput} /> <br />

                <label htmlFor="message">Message</label> <br />
                <textarea name="message" value={message} onChange={handleMessageChange} /> <br />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}