import React, { useState } from 'react';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import HeroSection from '../components/hero_section';
// import Footer from '../components/footer';
import AboutSection from '../components/about_section';
import ProductsSection from '../components/products_section';
import GallerySection from '../components/gallery_section';
import { withTheme } from '../../util/theme';
import ServicesSection from '../components/values_section';
import Footer from '../components/shared/footer';
import ServiceSection from  '../components/service_section';
import FirmHereoSection from '../components/firm_section/index'
import FirmPurposeSection from '../components/firm_section/firm'
import ValuesSection from '../components/values_section'


const Firm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <FirmHereoSection/>
      <FirmPurposeSection />
      <ValuesSection/>
      <Footer />
    </React.Fragment>
  );
};

export default withTheme(Firm);