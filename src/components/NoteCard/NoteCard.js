import React from 'react';
import { Link } from 'react-router-dom';
import './NoteCard.css'

const NoteCard = props => {
  let { _id, title, body } = props.note;

  return (
    <Link to={`/note/${_id}`} className="NoteCard">
      <div className="NoteCard-title">{title}</div>
      <div className="NoteCard-body">{body}</div>
    </Link>
  )
}

export default NoteCard;