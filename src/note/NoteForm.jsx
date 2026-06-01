import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContext";

export default function NoteForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(NoteDispatchContext);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleAddNote(e) {
        e.preventDefault();

        dispatch({
            type: "ADD_NOTE",
            text: text
        })

        setText("");
    }

    return (
        <div>
            <input type="text" placeholder="Add new note.." value={text} onChange={handleChange} />
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    )
}