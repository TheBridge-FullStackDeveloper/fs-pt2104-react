import React from 'react';

const Navbar = (props) => {
    return (
      <nav>
        <img src={props.navbar.img} alt="Logo"/>
        <ul>
          {props.navbar.links.map(link => (
            <li>{link}</li>))}
        </ul>
      </nav>
    )
  }

export default Navbar