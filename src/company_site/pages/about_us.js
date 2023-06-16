import React, {useState} from 'react';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import SideBar2 from '../components/sidebar2';
import Footer from '../components/footer';
import AboutSection from '../components/about_section';
import { withTheme } from '../../util/theme';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavBar toggle={toggle}/>
      <SideBar2 isOpen={isOpen} toggle={toggle}/>
      <div style={{height: "80px"}}/>
      <AboutSection/>
      <Footer/>
    </React.Fragment>
  );
};

export default withTheme(About);
