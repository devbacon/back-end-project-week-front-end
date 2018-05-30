import React, { Component } from 'react';
import axios from 'axios';

import NoteCard from '../note/card/NoteCard';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
 state = {
   notes: []
 }

 componentDidMount() {
   axios.get('https://some-awesome-lambda-notes-app.herokuapp.com/notes')
    .then(res => { this.setState({ notes: res.data }) })
    .catch(err => console.log(err));
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          {this.state.notes.map(note => {
            return <NoteCard note={note} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
