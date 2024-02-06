import React, { useState } from "react";
import '../style/noteform.css';


function NoteForm(props) {

  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
    console.log(e.target.value);

  }

  const handleShipping = e => {
    const newNote = {
      id: "2378",
      text: "hola"
    }
  }

  return (
    <form className="note-form">
      <input 
      className="note-input" 
      type="text"
      placeholder="Escribe una tarea"
      name="text"
      onChange={ handleChange }
      />
    <button className="note-button">
      Agregar tarea
    </button>
    </form>
  )
};

export default NoteForm;