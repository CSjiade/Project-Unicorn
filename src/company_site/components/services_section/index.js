import React from 'react';
import { applicationsData } from './application_data';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { ServicesSectionStyles, SectionCardStyles } from './services_section_style';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import './services_card.css';

const ColorTextTypography = withStyles({
   root: {
     color: "#FFD700"
   }
 })(Typography);

 
const ServicesSection = () => {
    const sectionClasses = ServicesSectionStyles();
    const cardClasses = SectionCardStyles();
    return (

    <div class="container" id='services'>
        
    <ColorTextTypography variant="h4" component="h4" >
        <center>Our Services</center>
      </ColorTextTypography>

    <div class="row">
    <div class="col-lg-12">
       <div class="featuredPropBox">
        <ul>
           <li> 
            {/* <a href="/#services"> */}
             <div class="fplogo" alt="fp1">
             </div>
             <div class="fptitle">
                <h5> Mergers & Acquisitions </h5>
                </div>
             <div class="fptext">
              <p>We match you with potential buyers of your business and help you to negotiate the best transaction price </p>
            </div>
             {/* </a>  */}
             </li>

             <li> 
               {/* <a href="/#services"> */}
             <div class="fplogo" alt="fp1">
             </div>
             <div class="fptitle">
                <h5> Capital Raising </h5>
                </div>
             <div class="fptext">
              <p>We connect you with Venture Capital, Private Equity and other Private Inventors to meet your capital needs</p>
            </div>
             {/* </a>  */}
             </li>

             <li> 
               {/* <a href="/#services"> */}
             <div class="fplogo"  alt="fp1">
             </div>
             <div class="fptitle">
                <h5> Business Valuation </h5>
                </div>
             <div class="fptext">
              <p>We help you discover the best market price of your business using modern valuation techniques and big data</p>
            </div>
             {/* </a> */}
              </li>

             
         </ul>
      </div>
     </div>
  </div>
 </div>




  );
};


export default ServicesSection;



        





    //   <Typography className={sectionClasses.description} component="h6">
    //   </Typography>
    //   <Typography className={sectionClasses.contact} variant='P' color='secondary' style={{ wordWrap: "break-word" }}>
    //     *We operate on a success-fee based system. No fees are charged till the transaction is closed
    //   </Typography>


        //   </div> */}