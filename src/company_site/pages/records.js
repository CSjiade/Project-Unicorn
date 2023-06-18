import React,{ useState, useEffect }  from 'react';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import SideBar2 from '../components/sidebar2';
import Footer from '../components/shared/footer';
import RecordSection from '../components/records_section';
import { withTheme } from '../../util/theme';


const Records = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0,0);
    
  }, []);

  return (
    <React.Fragment>
      <NavBar toggle={toggle}/>
      <SideBar2 isOpen={isOpen} toggle={toggle}/>
      <div style={{height: "80px"}}/>
      <RecordSection/>
      <Footer/>
    </React.Fragment>
  );
};

export default withTheme(Records);