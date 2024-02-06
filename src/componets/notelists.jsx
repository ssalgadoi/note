import React, { useState } from "react";
import "../style/notelists.css"
import NoteForm from "./noteform";
import Note from "./note";

function NoteLists() {
  const [notes, setNote] = useState([]);

  const addNote = note => {
    if (note.text.trim()) {
      note.text = note.text.trim();
      const updatedNote = [note, ...notes];
      setNote( updatedNote );
    }
  }


  return (
    <>
    <NoteForm onSubmit={ addNote }/>
    <div className="note-list-container">
    {
      notes.map((note) =>
        <Note 
        key={note.id}
        id={note.id}
        text={note.text}
        completed={note.completed}
        />
      )
    }
    </div>
    </>
  );
}

export default NoteLists;