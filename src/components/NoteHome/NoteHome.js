import React from 'react';
import './NoteHome.css';

import NoteCard from '../NoteCard/NoteCard';

const NoteHome = props => {
  return (
    <div className="NoteHome">
      {props.notes.map(note => <NoteCard note={note} key={note._id}/>)}
    </div>
  )
}

export default NoteHome;