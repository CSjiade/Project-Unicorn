import React, { useState } from 'react';
import NavBar from '../../navbar';
import SideBar from '../../sidebar';
import Footer from '../../footer';
import { Typography } from '@material-ui/core';
import BlogStyles from './blog_styles';
import { withTheme } from '../../../../util/theme';
import fig1 from '../../../images/blog_section/post2/fig1.jpg';
import fig2 from '../../../images/blog_section/post2/fig2.jpg';
import fig3 from '../../../images/blog_section/post2/fig3.jpg';
import fig4 from '../../../images/blog_section/post2/fig4.jpg';
import fig5 from '../../../images/blog_section/post2/fig5.jpg';


const BlogPost2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const blogStyles = BlogStyles();

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div style={{ height: "80px" }} />
      <div id="blog" className={blogStyles.blogContainer}>
        <Typography className={blogStyles.blogTitle} variant='h3'>
        Asia Pacific M&A Q1 2023
        </Typography>
        <Typography className={blogStyles.blogTitleDescription} style={{ textAlign: 'center' }}>
         "Down but not out"
          <br />
          Published on 2023
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          Asia Pacific M&A Overview
        </Typography>
        <img className={blogStyles.blogImage} src={fig1} alt='China M&A' />
        <Typography className={blogStyles.blogText}>
        M&A activities in Asia Pacific (APAC) lagged in the latter half of 2022 and the first quarter of 2023 
        because of multiple challenges including geopolitical instability, rising interest rates, 
        volatile capital markets, supply chain disruptions and regulatory changes.
         <br /><br />
         As companies in the region adapt, there is some optimism regarding an anticipated upward trend 
          toward the second half of the year. One of the most effective ways that businesses can take advantage 
          of this opportunity in the landscape while avoiding the present geopolitical and regulatory pitfalls 
          is through strategic thinking and holding a long-term view about their business strategy
        </Typography>

        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
        Market predictions: an uptick in deals and cross-border activities 
        </Typography>
        <Typography className={blogStyles.blogText} >
        2022 witnessed a global downturn in M&A activities, and Asia Pacific was no exception. 
        The region experienced a 23% drop in volume and a 33% decrease in value from the 2021 peak
         <br /><br />
         <img className={blogStyles.blogImage} src={fig2} alt='China M&A' />
         <br /><br />
         Despite this decline, Asia Pacific’s share of global deal value increased from 23% in 2021 to 25% in 2022, 
         while its share of global deal volume dropped from 32% in 2021 to around 30% in 2022.
         <br /><br />
         <img className={blogStyles.blogImage} src={fig3} alt='China M&A' />
         <br /><br />
          M&A in China slowed in 2022 in response to the country’s pandemic-related challenges
          and weakening demand for exports, resulting in a sharp decline of 46% in deal volume 
          and 35% in value between 2021 and 2022. But it has picked up in 2023 as China 
          has opened up again. India, Japan and Southeast Asian countries are also attracting investment,
          with India surpassing Japan and South Korea to become the second-largest investment destination
          in terms of deal values in the region, after China.
          <br /><br />

            Companies in the region are now seeing opportunities to reimagine their businesses, 
            expand globally or acquire technology through cross-border M&A deals.
            <br /><br />

            Market analysts predict a noticeable increase in deal-making activities further into the latter half of 2023, 
            and a significant rise in cross-border activities in the next two years and beyond. 
            In addition to these positive developments, investors and companies will continue to encounter
             regulatory and geopolitical headwinds.
            <br /><br />
        </Typography>

        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
        Assessing regulatory and geopolitical challenges
        </Typography>
        <img className={blogStyles.blogImage} src={fig4} alt='China Province Photo' />
        <Typography className={blogStyles.blogText} >
        In recent years, many countries have tightened regulations on foreign investment, particularly in sensitive sectors 
        such as industrials, energy, technology and communication services. For instance, the Committee on Foreign Investment 
        in the United States has broadened its review of foreign investments to include newly formulated national security 
        factors such as supply chain resiliency, US technological leadership, cybersecurity and sensitive data. 
        Similarly, China’s Foreign Investment Law requires foreign investors to undergo national security reviews
         and imposes restrictions on investment in certain industries. Just last year, China further developed 
         its national security regulatory regime by promulgating measures on cybersecurity review and assessment 
         of cross-border data transfer.
        <br /><br />
        M&A involving cross-border transactions will most likely face significant delays and uncertainties 
        because of these new regulatory challenges. It is critical for companies to conduct a thorough assessment 
        of the regulatory and market landscape in each country they plan to do business in and develop strategies 
        to manage compliance and public opinion and mitigate risk. This requires close coordination between 
        legal, financial and communications teams, and a deep understanding of local laws, regulations and the socioeconomic environment.

        <br /><br />
        Apart from regulatory challenges, geopolitical risks are another major consideration for companies engaging in cross-border M&A. 
        Globally, the war in Ukraine and the ongoing tensions between the US and China pose the most significant risks 
        to the world economy in 2023 and beyond. In Asia Pacific, there are several flashpoints including the potential for 
        conflict in the Taiwan Strait, the South China Sea and the Korean peninsula. These risks can create substantial 
        uncertainty for M&A deals, especially for companies operating in sensitive sectors or with broad exposure to geopolitical risks.
        </Typography>


        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
        Creating long-term value
        </Typography>
        <img className={blogStyles.blogImage} src={fig5} alt='M&A outlook China' />
        <Typography className={blogStyles.blogText} >
         Nevertheless, taking a long-term perspective, the Asia-Pacific region is poised for a surge in M&A activities, 
         propelled by a range of factors such as economic recovery, ndustry restructuring and regional companies’ desire
         to drive growth and expand their reach. However, investors and companies must not underestimate the significance of due diligence, 
         effective communication strategies and post-merger integration planning in ensuring a successful outcome.
          By paying close attention to these factors, companies and investors can maximize the potential benefits 
          of M&A and create long-term value for all stakeholders.
        </Typography>
        <Typography className={blogStyles.blogText} style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          Keen to purse an M&A transaction in Asia-Pacific? Contact us on +(xx) XXXX-XXXX and let us help you achieve your strategic goals
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default withTheme(BlogPost2);