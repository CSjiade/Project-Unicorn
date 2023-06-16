import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as IoIcons from 'react-icons/io';
// import * as GiName from "react-icons/gi";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { HashLink as LinkS } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import './sidebar.css'

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarWrapper = styled.div`
`;

const Sidebar = ({ toggle, isOpen }) => {

  const [sidebar, setSidebar] = useState(false);

    // custom hook to get the current pathname in React
    const usePathname = () => {
      const location = useLocation();
      return location.pathname;
    }


  const SideBarHomeData = [
    {
      title: 'Home',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
  ]

  const SideBarAboutData = [
    {
      title: 'About Us',
      icon: <AiIcons.AiOutlineTeam />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
  ]

  const SideBarServiceData = [
    {
      title: 'Services',
      icon: <TbIcons.TbBuildingSkyscraper/>
    },
  ]

  const SideBarProjectsData = [
    {
      title: 'Project',
      icon: <BsIcons.BsBriefcase/>
    },
  ]


  const SideBarFirmData = [
    {
      title: 'The Firm',
      icon: <AiIcons.AiOutlineBank />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    }
  ]
  const SideBarFirmSubData = [
    {
      title: 'Who We Are',
      path: '/firm',
      icon: ''
    },
    {
      title: 'Media',
      path: '/blog',
      icon: ''
    },
    {
      title: 'Contact Us',
      path: '/contact',
      icon: ''
    }
  ]


  return (
    <>
       <SidebarWrap>
       <SidebarWrapper onClick={toggle}>
       <SubMenu path = {"/#home"} submenu={null} item = {SideBarHomeData} toggle={toggle} />
       <SubMenu path = {"/#about"} submenu={null} item = {SideBarAboutData} onClick={toggle} />
       <SubMenu path = {"/#service"} submenu={null} item = {SideBarServiceData} onClick={toggle} />
       <SubMenu path = {"/projects"} submenu={null} item = {SideBarProjectsData}  onClick={toggle} />
       </SidebarWrapper>
       <SubMenu path = {usePathname()} submenu={SideBarFirmSubData} item = {SideBarFirmData} isOpen={isOpen} toggle={toggle} />
      </SidebarWrap>
      {/* {SidebarData.map((item, index) => {
              return <SubMenu path = {"/contact"} item={item} key={index} isOpen={isOpen} toggle={toggle} />;
          })} */}
    </>
  );
};

export default Sidebar;






