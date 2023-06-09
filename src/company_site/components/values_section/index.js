import React from 'react';
import { applicationsData } from './application_data';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { ServicesSectionStyles, SectionCardStyles } from './values_section_style';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import './values_card.css';

const ColorTextTypography = withStyles({
   root: {
     color: "#FFD700"
   }
 })(Typography);

 
const ValuesSection = () => {
    const sectionClasses = ServicesSectionStyles();
    const cardClasses = SectionCardStyles();
    return (
    <div class="container" id='services'>
        
    <ColorTextTypography variant="h4" component="h4" >
        <center>Our Core Values</center>
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
                <h5> Client-Focused </h5>
                </div>
             <div class="fptext">
              <p>  We firmly believe that in every business interaction, the client's interest must be prioritised </p>
            </div>
             {/* </a>  */}
             </li>

             <li> 
               {/* <a href="/#services"> */}
             <div class="fplogo" alt="fp1">
             </div>
             <div class="fptitle">
                <h5>Execution-Oriented </h5>
                </div>
             <div class="fptext">
              <p>We do not simply sell ideas, we propose solutions that are actionable, strategic and beneficial</p>
            </div>
             {/* </a>  */}
             </li>

             <li> 
               {/* <a href="/#services"> */}
             <div class="fplogo"  alt="fp1">
             </div>
             <div class="fptitle">
                <h5> Integrity</h5>
                </div>
             <div class="fptext">
              <p> Our solutions are based on honesty, fairness and transparency as we believe in a partnership approach </p>
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


export default ValuesSection;



        





    //   <Typography className={sectionClasses.description} component="h6">
    //   </Typography>
    //   <Typography className={sectionClasses.contact} variant='P' color='secondary' style={{ wordWrap: "break-word" }}>
    //     *We operate on a success-fee based system. No fees are charged till the transaction is closed
    //   </Typography>


        //   </div> */}