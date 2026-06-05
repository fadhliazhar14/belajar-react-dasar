import Note from "./Note";
import { NoteContext } from "./NoteContext";
import { useContext, useMemo, useRef, useState } from "react";

export default function NoteList() {
    const notes = useContext(NoteContext);
    const [search, setSearch] = useState("");
    const searchKeyword = useRef(null);

    const filteredNotes = useMemo(() => {
        return notes.filter(note => note.text.includes(search));
    }, [notes, search]);

    function handleSearch() {
        setSearch(searchKeyword.current.value);
    }

    return (
        <div>
            <input placeholder="Search notes.." type="text" ref={searchKeyword} />
            <button onClick={handleSearch}>Search</button>
            <br />
            <ul>
                {
                    filteredNotes.map(note => (
                        <li key={note.id}>
                            <Note note={note} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}