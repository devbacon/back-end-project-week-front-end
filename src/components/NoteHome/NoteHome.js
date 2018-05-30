import React from 'react';
import './NoteHome.css';

import NoteCard from '../NoteCard/NoteCard';

const NoteHome = props => {
  return (
    <div className="NoteHome">
      {props.notes.map(note => <NoteCard note={note} />)}
    </div>
  )
}

export default NoteHome;