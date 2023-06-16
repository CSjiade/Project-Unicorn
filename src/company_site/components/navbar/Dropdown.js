import React, { useState, useEffect} from 'react';
import { serviceDropdown } from "./NavItems";
import "./Dropdown.css";
import { Link as LinkR, NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function Dropdown() {

  const [dropdown, setDropdown] = useState(false);

  const startFromTop = () => {
    setDropdown(false)
    window.scrollTo(0,0);
  }
  


  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              < NavLink 
               
                to={item.path}
                className={item.cName}
                onClick={() => startFromTop }
              >
                {item.title}
              </ NavLink >
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;