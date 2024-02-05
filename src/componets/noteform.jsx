import React from "react";
import '../style/noteform.css';


function NoteForm(props) {
  return (
    <form className="note-form">
      <input 
      className="note-input" 
      type="text"
      placeholder="Escribe una tarea"
      name="text"
      />
    <button className="note-button">
      Agregar tarea
    </button>
    </form>
  )
};

export default NoteForm;