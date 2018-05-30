import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Nav from '../Nav/Nav';
import Info from '../Info/Info';
import NoteHome from '../NoteHome/NoteHome';
import NoteView from '../NoteView/NoteView';
import NoteForm from '../NoteForm/NoteForm';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  state = { notes: [] }

  componentDidMount() {
    axios.get('https://some-awesome-lambda-notes-app.herokuapp.com/notes')
      .then(res => { this.setState({ notes: res.data }) })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/notes">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Lambda Notes</h1>
              <Nav />
            </header>
          </Link>
          <div className="App-body">
            <Route exact path="/" component={Info}/>
            <Route exact path="/notes" render={() => 
              <NoteHome notes={this.state.notes}/>
            }/>
            <Route path="/notes/:id" render={props => 
              <NoteView {...props}/>
            }/>
            <Route path="/note/form" render={props =>
              <NoteForm {...props}/>
            }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
