import React from "react";
import "./index.css";


const MenuItems = ({ menuItem }) => {
    return (
      <ul>
        {menuItem.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default MenuItems;