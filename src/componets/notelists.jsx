import React, { useState } from "react";
import "../style/notelists.css"
import NoteForm from "./noteform";
import Note from "./note";

function NoteLists() {

  const [notes, setNote] = useState([]);




  return (
    <>
    <NoteForm />
    <div className="note-list-container">
    {
      notes.map((note) =>
        <Note 
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