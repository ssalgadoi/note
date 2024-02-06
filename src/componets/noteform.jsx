import React, { useState } from "react";
import '../style/noteform.css';
import { v4 as uuidv4 } from 'uuid';


function NoteForm(props) {

  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const handleShipping = e => {
    e.preventDefault();
    
    const newNote = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newNote);
  }

  return (
    <form 
    className="note-form"
    onSubmit={ handleShipping }>
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