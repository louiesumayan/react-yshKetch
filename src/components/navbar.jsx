import React from 'react';

function Navbar() {
  return (
    <nav className="navbar container">
      <h4>YSHKETCH ~ </h4>
      <ul className="navbar_nav">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
