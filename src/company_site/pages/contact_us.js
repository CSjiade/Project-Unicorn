import React, { useState } from 'react';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import { withTheme } from '../../util/theme';
import Footer from '../components/shared/footer';
import Contact from '../components/contact_section/Contact';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Contact/>
      <Footer />
    </React.Fragment>
  );
};

export default withTheme(ContactUs);