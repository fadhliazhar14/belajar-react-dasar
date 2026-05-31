import { useState } from "react";

export default function NoteForm({ onAddNote }) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleAddNote(e) {
        e.preventDefault();

        onAddNote(text);

        setText("");
    }

    return (
        <div>
            <input type="text" placeholder="Add new note.." value={text} onChange={handleChange} />
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    )
}