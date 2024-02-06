import React from "react";
import "../style/notelists.css"
import NoteForm from "./noteform";

function NoteLists() {
  return (
    <>
    <NoteForm />
    <div className="note-list-container">
      Lista de tarea
    </div>
    </>
  );
}

export default NoteLists;