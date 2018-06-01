import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props => {
  return (
    <div className="Nav">
      {/* Opens login drop down */}
      <Link to=""><button onClick={props.test}className="Nav-login">Login</button></Link>
      {/* Click button > click note > edit note > confirm */}
      <Link to="/note/form"><button className="Nav-create">Create</button></Link>
      {/* Click button > click note > edit note > confirm */}
      {/* <button className="Nav-edit">Edit</button> */}
      {/* Click button > click note > delete note > confirm */}
      {/* <button className="Nav-delete">Delete</button> */}
    </div>
  )
}

export default Nav;
