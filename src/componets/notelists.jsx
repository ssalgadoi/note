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

  const deleteNote = id => {
    const updatedNote = notes.filter(note => note.id !== id);
    setNote(updatedNote)
  }

  const completeNote = id => {
    const updatedNote = notes.map(note => {
      if (note.id === id) {
        note.completed = !note.completed;
      }
      return note;
    });
    setNote(updatedNote);
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
        completeNote={ completeNote }
        deleteNote={ deleteNote }
        />
      )
    }
    </div>
    </>
  );
}

export default NoteLists;