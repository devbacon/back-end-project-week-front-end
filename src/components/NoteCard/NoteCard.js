import React from 'react';
import './NoteCard.css'

const NoteCard = props => {
  return(
    <div id={props.note._id} className="NoteCard">
      <div className="NoteCard-title">{props.note.title}</div>
      <div className="NoteCard-body">{props.note.body}</div>
    </div>
  )
}

export default NoteCard;