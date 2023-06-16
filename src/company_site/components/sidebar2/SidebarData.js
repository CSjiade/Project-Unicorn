import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { useLocation } from 'react-router-dom';


export const SidebarData = [
  
  {
    title: 'Home',
    path: '/#home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'About',
    path: '/#about',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Services',
    path: '/#service',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Project',
    path: '/projects',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'The Firm',
    path: '',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Who We Are',
        path: '/firm',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Media',
        path: '/blog',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Contact Us',
        path: '/contact',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
