import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AboutSectionStyles from './about_us_styles';

// import AboutBackground1 from '../../images/about_section/about_bg_1.jpg';
import AboutBackground2 from '../../images/about_section/about_bg_1.png';
// import AboutBackground3 from '../../images/about_section/about_bg_3.jpg';
import AboutBackground4 from '../../images/about_section/about_bg_2.png';


const AboutSection = () => {
  const classes = AboutSectionStyles();
  
  const imageBg2 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${AboutBackground2})`,
  }
  const imageBg4 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${AboutBackground4})`,
  }
  return (
    <Grid id="about" className={classes.aboutContainer} container>
      <Grid className={classes.cardContainer} container item xs={12}>
      <Grid className={classes.imageContainer} style={imageBg2} item xs={12} md={6}>
        </Grid>
        <Grid className={classes.textContainer} item xs={12} md={6}>
          <div>
            <Typography variant="h6" className={classes.header}>Who we are</Typography>
            <Typography variant="h3" className={classes.subHeader}>M&A Solutions</Typography>
            <Typography variant="body1" className={classes.bodyText}>
              Mira Capital Markets specialises in providing transparent, fair and strategic M&A solutions for businesses across Asia-Pacfic. We operate on a success-fee based system. 
               There are no "retainer fees" or "interim fees", and we do not receive any fees until the M&A is closed.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.cardContainer} container item xs={12}>
        <Grid className={classes.imageContainer} style={imageBg4} item xs={12} md={6}>
        </Grid>
        <Grid className={classes.textContainer} item xs={12} md={6}>
          <div>
            <Typography variant="h6" color="#FFD700" className={classes.header}>What We Provide</Typography>
            <Typography variant="h3" className={classes.subHeader}>One Stop M&A Service</Typography>
            <Typography variant="body1" className={classes.bodyText}>
              We provide end-to-end support across the M&A process from strategic evaluation of your business, business valuation, 
              preparation for sale, sourcing of potential buyers, to deal negotiation and closure.<br />
              <br />
              Keen to explore selling your business? Come speak with us and let use help you achieve the best transaction price
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;

