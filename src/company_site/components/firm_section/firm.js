import "./firm.css"
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const ColorTextTypography = withStyles({
    root: {
      color: "#FFD700"
    }
  })(Typography);

function firm() {

    return (
        <div className = "firm-container">

      <ColorTextTypography variant="h4" component="h4" >
        <center>Our Mission</center>
        </ColorTextTypography>
            <p>
             Provide transparent, fair, strategic and cost-effective M&A solutions that lead to better business outcomes
            </p>
            <ColorTextTypography variant="h4" component="h4" >
                <center>Our Vision</center>
             </ColorTextTypography>
            <p>
            Democratise access to high-quality strategic M&A solutions no matter the size and background of the business
            <br /> Leading to a Fairer, Enriching and Vibrant Econmoy for all
            </p>
        </div>
    )




}

export default firm;