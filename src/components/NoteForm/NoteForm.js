import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
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
      </form>
    )
  }
}

export default NoteForm;