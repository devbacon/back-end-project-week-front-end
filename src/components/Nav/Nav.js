import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav">
      {/* Opens login drop down */}
      <button className="Nav-login">Login</button>
      {/* Click button > click note > edit note > confirm */}
      <button className="Nav-create">Create</button>
      {/* Click button > click note > edit note > confirm */}
      {/* <button className="Nav-edit">Edit</button> */}
      {/* Click button > click note > delete note > confirm */}
      {/* <button className="Nav-delete">Delete</button> */}
    </div>
  )
}

export default Nav;
