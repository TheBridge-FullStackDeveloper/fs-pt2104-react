import React from "react";
import "./index.css";
import Data from "../data.json"
import MenuList from "./MenuList";

const listItems = Data.navbar.links

const Header = () =>{
    return (  <div>
        <header>
          <nav>
            <img
              src={Data.navbar.img}
              alt="Logo"
            />

            <MenuList
              menuItem={listItems}
            />
          </nav>
        </header>
      </div>);

}

export default Header