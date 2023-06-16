import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HashLink as LinkS } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';



export const SidebarLinkHash = styled(LinkS)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
  background: #252831;
  border-left: 4px solid #FFD700;
  cursor: pointer;
}
`

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #FFD700;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    border-left: 4px solid #FFD700;
    cursor: pointer;
  }
`;
const SubMenu = ({ path, submenu, item , toggle, isOpen}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      {item.map((item, index) => {
        return(
      <SidebarLinkHash to={path} onClick={submenu && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel> {item.title}</SidebarLabel >
        </div>
        <div>
          {submenu && subnav
            ? item.iconOpened
            : submenu
            ? item.iconClosed
            : null}
        </div>
      </SidebarLinkHash>
        )
    })}

      {subnav &&
        submenu.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );


};

export default SubMenu
