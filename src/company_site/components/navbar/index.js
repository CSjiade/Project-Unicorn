import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkR, NavLink } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import AppLogo from '../../images/alogo.png';
import './navbar.css';
import { withTheme } from '../../../util/theme';
import Dropdown from "./Dropdown";
import DropdownProjects from "./Dropdown_projects";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const [dropdownProject, setDropdownProject] = useState(false);

  const navListener = () => {
    // if (window.scrollY >= 80) {
    //   setScrollNav(true);
    // } else {
    //   setScrollNav(false);
    // }
    setScrollNav(true)
  };

  useEffect(() => {
    window.addEventListener('scroll', navListener);
  }, []);

  const scrollToTopListener = () => {
    scroll.scrollToTop();
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const startFromTop = () => window.scrollTo(0,0);

  return (
    <React.Fragment>
      <nav className={`main-nav ${scrollNav && `main-nav-scrollNav`}`}>
        <div id="nav-bar-container">
          <LinkR id="nav-logo" to="/" onClick={scrollToTopListener}>
            <img id="rs-logo" src={AppLogo } alt={AppLogo } />
          </LinkR>
          <div id="mobile-icon" onClick={toggle}>
            <MenuIcon />
          </div>

          <ul id="nav-menu">
            <li className="nav-item">
              <LinkR
                className="nav-link"
                to="/"
                onClick={scrollToTopListener}
              >
                Home
              </LinkR>
              <LinkS
              className="nav-link-background"
              to="home"
              spy={true}
              exact="true"
              offset={-80}>
                Home
              </LinkS>
            </li>

            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/aboutus"
                onClick={startFromTop}
              >
                About Us
              </NavLink>
            </li> */}

            <li className="nav-item">
              <HashLink
                className="nav-link"
                scroll={scrollWithOffset}
                to="/#about"
              >
                About Us
              </HashLink>
              <LinkS
                className="nav-link-background"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Us
              </LinkS>
            </li>

            <li className="nav-item">
              <HashLink
                className="nav-link"
                scroll={scrollWithOffset}
                to="/#service"
              >
                Services
              </HashLink>
              <LinkS
                className="nav-link-background"
                to="service"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Services
              </LinkS>
            </li>
            
            
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/projects"}
                onClick={startFromTop}
              >
                Projects
              </NavLink>        
            </li> */}



              <li className="nav-item"
                onMouseEnter={() => setDropdownProject(true)}
                onMouseLeave={() => setDropdownProject(false)}
              >
              <HashLink
                className="nav-link"
                scroll={scrollWithOffset}
                to="/projects"
                >
               Projects
              </HashLink>
              <LinkS
                className="nav-link-background"
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Projects
              </LinkS>
              {dropdownProject && <DropdownProjects />}
            </li>




              <li className="nav-item"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
              <HashLink
                className="nav-link"
                scroll={scrollWithOffset}
                to="/firm"
                >
               The Firm
              </HashLink>
              <LinkS
                className="nav-link-background"
                to="firm"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                The Firm
              </LinkS>
              {dropdown && <Dropdown />}
            </li>




            {/* <li className="nav-item">
              <HashLink
                className='nav-link'
                scroll={scrollWithOffset}
                to="/#footer">
                Contact Us
              </HashLink>
              <LinkS
                className="nav-link-background"
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                  Contact Us
              </LinkS>
            </li> */}

  







            {/* <li className="nav-item">
              <HashLink
                className='nav-link'
                scroll={scrollWithOffset}
                to="/#footer-wrapper"
              >
                Contact Us
              </HashLink>
              <LinkS
                className="nav-link-background"
                to="footer-wrapper"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact Us
              </LinkS>
            </li> */}

          </ul>
    
      </div>
      </nav>
    </React.Fragment>
  );
};

export default withTheme(NavBar);




      // <div id="social-icons">
            {/* <Button href="/contactus" variant='outlined' color='secondary'>
              Book a demo
            </Button> */}
          //   <a
          //     className="social-icon-link"
          //     href="https://www.facebook.com/"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     aria-label="Facebook"
          //   >
          //     <FaFacebook />
          //   </a>
          //   <a
          //     className="social-icon-link"
          //     href="https://www.instagram.com/"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     aria-label="Instagram"
          //   >
          //     <FaInstagram />
          //   </a>
          //   <a
          //     className="social-icon-link"
          //     href="https://www.linkedin.com/company/"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     aria-label="LinkedIn"
          //   >
          //     <FaLinkedin />
          //   </a>
          //   <a
          //     className="social-icon-link"
          //     href="https://youtube.com/channel/"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     aria-label="YouTube"
          //   >
          //     <FaYoutube />
          //   </a>
          // </div>
