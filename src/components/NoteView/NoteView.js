import React, { Component } from 'react';
import axios from 'axios';
import './NoteView.css';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    axios.get(`https://some-awesome-lambda-notes-app.herokuapp.com/notes/${props.match.params.id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return this.state.note ?
      <div className="NoteView">
        <div className="NoteView-title">{this.state.note.title}</div>
        <div className="NoteView-body">{this.state.note.body}</div>
      </div> : <div className="NoteView">Loading...</div>
  }
}

export default NoteView;