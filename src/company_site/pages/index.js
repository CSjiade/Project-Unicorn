import React, { useState } from 'react';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import HeroSection from '../components/hero_section';
import AboutSection from '../components/about_section';
import { withTheme } from '../../util/theme';
import Footer from '../components/shared/footer';
import ServiceSection from  '../components/service_section';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <AboutSection/>
      {/* <ServicesSection/> */}
      <ServiceSection/>
      {/* <ProductsSection />
      <GallerySection /> */}
      
      <Footer />
    
    </React.Fragment>
  );
};

export default withTheme(Home);



