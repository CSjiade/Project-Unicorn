import React from 'react';
import "./service.css"
import ServiceData from "./serviceData"
import Service1 from "./a.jpg"
import Service2 from "./b.jpg"
import Service3 from "./c.jpg"
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const ColorTextTypography = withStyles({
    root: {
      color: "#FFD700"
    }
  })(Typography);


function service() {
    return (
        <div className="service" >

            {/* <h1 id="service">
              Services  
            </h1> */}

            <ColorTextTypography variant="h4" component="h4" >
             <center>Services</center>
            </ColorTextTypography>



            <h3 class = "subheader">
            Transparent {' '} | {' '} Fair  {' '} | {' '} Strategic
            </h3>
            
            <div className="servicecard">

            <ServiceData
            image = {Service1}
            heading = "Sell-Side M&A"
            text = "We match you with potential buyers of your business and work with you throughout the M&A process till closure to ensure you get the best transaction price"
            />

            <ServiceData
            image = {Service2}
            heading = "Capital Raising"
            text = "We connect you with Venture Capital, Private Equity and other Private Inventors across the region to meet your capital needs and business expansion plans"
            />

            <ServiceData
            image = {Service3}
            heading = "Business Valuation"
            text = "We help you discover the best market price of your business utilising modern valuation techniques and data-driven analytics of financial data "
            />

            </div>
        </div>

    )
}

export default service;