import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '', update: false };

    const id = props.match.params.id;
    
    if(id) {
      axios.get(`https://some-awesome-lambda-notes-app.herokuapp.com/notes/${id}`)
        .then(res => {
          const { title, body } = res.data;
          this.setState({ title, body, update: true, id: id })
        })
        .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    this.resizeInputs();
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.resizeInputs();
  }

  resizeInputs() {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.style.height = "1px";
      textarea.style.height = (textarea.scrollHeight)+"px";
    });
  }

  resetInput() {
    this.setState({ title: '', body: '' });
  }

  saveNote = () => {
    const { title, body, id } = this.state;

    if(this.state.update) {
      axios.put('https://some-awesome-lambda-notes-app.herokuapp.com/notes', { title, body, id })
        .then(res => {
          this.props.getNotes();
        })
        .catch(err => console.log(err));
    } else {
      axios.post('https://some-awesome-lambda-notes-app.herokuapp.com/notes', { title, body })
        .then(res => {
          this.props.getNotes();
        })
        .catch(err => console.log(err));
    }
    
  }

  render() {
    return (
      <form className="NoteForm">
        <textarea
          className="NoteForm-title"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleInput}
        />
        <textarea
          className="NoteForm-body"
          name="body"
          placeholder="Write your note here..."
          value={this.state.body}
          onChange={this.handleInput}
        />
        <Link to="/notes">
          <button onClick={this.saveNote} className="NoteForm-save">Save</button>
        </Link>
      </form>
    )
  }
}

export default NoteForm;