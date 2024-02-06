import React from "react";
import '../style/note.css';
import { IoMdCloseCircleOutline } from "react-icons/io";


function Note({ id, text, completed, completeNote, deleteNote }) {
  return (
    <div className={ completed ? "container-note completed" : "container-note"}>
      <div 
      className="text-note"
      onClick={() => completeNote(id)}>
        { text }
      </div>
      <div 
      className="icons-conainer"
      onClick={() => deleteNote(id)}>
        <IoMdCloseCircleOutline className="icon-note" />
      </div>
    </div>
  )
};

export default Note;