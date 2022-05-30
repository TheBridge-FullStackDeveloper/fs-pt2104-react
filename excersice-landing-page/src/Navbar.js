import React from "react";
import data from "../data.json";

const Navbar = () => {
    return (
      <nav style={{ backgroundColor: '#22172b', display: 'flex', padding: '1%'}}>
    <img src={data.navbar.img} width='180px' />
    <ul style={{ color: 'white', listStyle: 'none', display: 'flex' }}>
      {data.navbar.links.map((link) => (
        <li style={{ margin: '2%', width: '150px'}}>{link}</li>
      ))}
    </ul>
      </nav>
    )
  };

  export default Navbar;