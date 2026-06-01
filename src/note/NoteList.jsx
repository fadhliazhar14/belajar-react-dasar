import Note from "./Note";
import { NoteContext, NoteDispatchContext } from "./NoteContext";
import { useContext } from "react";

export default function NoteList() {
    const note = useContext(NoteContext);
    const dispatch = useContext(NoteDispatchContext);

    function handleChangeNote(note) {
        dispatch({
            ...note,
            type: "CHANGE_NOTE"
        })
    }

    function handleDeleteNote(note) {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        })
    }
    return (
        <ul>
            {
                note.map(note => (
                    <li key={note.id}>
                        <Note note={note} />
                    </li>
                ))
            }
        </ul>
    )
}