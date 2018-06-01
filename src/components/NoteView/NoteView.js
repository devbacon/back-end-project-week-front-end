import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  deleteNote = () => {
    const deleteData = { data: { id: this.state.note._id } };
    axios.delete('https://some-awesome-lambda-notes-app.herokuapp.com/notes', deleteData) 
      .then(res => {
        this.props.getNotes();
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.note ?
      <div>
        <div className="NoteView">
          <div className="NoteView-title">{this.state.note.title}</div>
          <div className="NoteView-body">{this.state.note.body}</div>
        </div>
        <Link to={`/note/form/${this.state.note._id}`}>
        <button className="NoteView-button">Edit</button>
        </Link>
        <Link to={'/notes'}>
        <button className="NoteView-button" onClick={this.deleteNote}>Delete</button>
        </Link>
      </div> : <div className="NoteView">Loading...</div>
  }
}

export default NoteView;