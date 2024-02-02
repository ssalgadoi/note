import React from "react";
import '../style/note.css';
import { IoMdCloseCircleOutline } from "react-icons/io";


function Note({ text }) {
  return (
    <div className="container-note">
      <div className="text-note">
        { text }
      </div>
      <div className="icons-conainer">
        <IoMdCloseCircleOutline className="icon-note" />
      </div>
    </div>
  )
};

export default Note;