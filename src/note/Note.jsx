import { useState } from "react"

export default function Note({ note, onChangeNote, onDeleteNote }) {
    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleTextChanges(e) {
        const newNote = { ...note, text: e.target.value };

        onChangeNote(newNote);
    }

    function handleChangeDone(e) {
        const newNote = { ...note, done: e.target.checked };

        onChangeNote(newNote);
    }

    if (isEditing) {
        component = (
            <>
                <input type="text" onChange={handleTextChanges} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={() => onDeleteNote(note)}>Delete</button>
        </label>
    )
}