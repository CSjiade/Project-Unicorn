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
import SubMenu from './SubMenu';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Sidebar from './Sidebar.js';



const SideBar2 = ({ toggle, isOpen }) => {
  
  return (
    <SidebarContainer isOpen={isOpen}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>

      <Sidebar isOpen={isOpen} toggle={toggle}/>

      </SidebarContainer>

  );
};

export default SideBar2;




