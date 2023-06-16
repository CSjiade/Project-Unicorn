import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import SideBar2 from '../components/sidebar2';
import { withTheme } from '../../util/theme';
import Footer from '../components/shared/footer';
import Contact from '../components/contact_section/Contact';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar2 isOpen={isOpen} toggle={toggle} />
      <Contact/>
      <Footer />
    </React.Fragment>
  );
};

export default withTheme(ContactUs);