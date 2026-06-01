import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NoteContext, NoteDispatchContext } from "./NoteContext";


let noteId = 0;
const initialNotes = [
    { id: noteId++, text: "Belajar HTML", done: true },
    { id: noteId++, text: "Belajar CSS", done: false },
    { id: noteId++, text: "Belajar JavaScript", done: false },
    { id: noteId++, text: "Belajar React", done: false }
];

function notesReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
        notes.push({
            id: noteId++,
            text: action.text,
            done: false
        })
    } else if (action.type === "CHANGE_NOTE") {
        const index = notes.findIndex(n => n.id === action.id);

        notes[index].text = action.text;
        notes[index].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
        const index = notes.findIndex(n => n.id === action.id);

        notes.splice(index, 1);
    }
}

export default function NoteApp() {
    // Menggunakan react reducer

    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    return (
        <div>
            <NoteContext.Provider value={notes}>
                <NoteDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm />
                    <NoteList />
                </NoteDispatchContext.Provider>
            </NoteContext.Provider>
        </div>
    )
}