import { useContext, useState } from "react"
import { NoteDispatchContext } from "./NoteContext";

export default function Note({ note }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(NoteDispatchContext);
    let component;

    function handleTextChanges(e) {
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            text: e.target.value
        })
    }

    function handleChangeDone(e) {
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            done: e.target.checked
        })
    }

    function handleDeleteNote() {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        })
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
            <button onClick={handleDeleteNote}>Delete</button>
        </label>
    )
}