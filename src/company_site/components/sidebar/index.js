import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from './sidebar_elements.js';

import './sidebar.css';

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SideBar = ({ toggle, isOpen }) => {
  
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const startFromTop = () => {
    window.scrollTo(0,0);
    toggle=false;
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/#home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/#about" onClick={toggle} scroll={scrollWithOffset}>
            About Us
          </SidebarLink>
          <SidebarLink to="/#service" onClick={toggle} scroll={scrollWithOffset}>
            Services
          </SidebarLink>

          <SidebarRoute to="/projects" onClick={toggle}>
            Projects
          </SidebarRoute>


          {/* <SidebarLink to="/#products" onClick={toggle} scroll={scrollWithOffset}>
            Projects
          </SidebarLink> */}

          <SidebarRoute to="/firm" onClick={toggle}>
            The Firm
          </SidebarRoute>

          {/* <SidebarLink to="/#gallery" onClick={toggle} scroll={scrollWithOffset}>
            Values 
          </SidebarLink> */}
          {/* <SidebarLink to="/#footer" onClick={toggle} scroll={scrollWithOffset}>
            Contact Us
          </SidebarLink> */}
          <SidebarRoute to="/blog" onClick={toggle}>
            Media
          </SidebarRoute>
          
        </SidebarMenu>
        {/* <div id="sidebar-social-icons">
          <a
            className="sidebar-social-icon-link"
            href="https://www.facebook.com/Temirobosolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className="sidebar-social-icon-link"
            href="https://www.instagram.com/temi_singapore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="sidebar-social-icon-link"
            href="https://www.linkedin.com/company/robosolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="sidebar-social-icon-link"
            href="https://youtube.com/channel/UCxOq44vEG251lq8A39RXnYw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
