import React, { Component } from 'react';
import axios from 'axios';

import NoteHome from '../note/home/NoteHome';

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
          <h1 className="App-title">Welcome to Lambda Notes</h1>
        </header>
        <div className="App-body">
          <NoteHome notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
