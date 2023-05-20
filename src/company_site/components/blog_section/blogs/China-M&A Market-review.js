import React, { useState } from 'react';

import NavBar from '../../navbar';
import SideBar from '../../sidebar';
import Footer from '../../footer';
import { Typography } from '@material-ui/core';
import BlogStyles from './blog_styles';
import { withTheme } from '../../../../util/theme';
import fig1 from '../../../images/blog_section/post1/fig1.jpg';
import fig2 from '../../../images/blog_section/post1/fig2.jpg';
import fig3 from '../../../images/blog_section/post1/fig3.jpg';
import fig4 from '../../../images/blog_section/post1/fig4.jpg';
import fig5 from '../../../images/blog_section/post1/fig5.jpg';
import fig6 from '../../../images/blog_section/post1/fig6.jpg';
import fig7 from '../../../images/blog_section/post1/fig7.jpg';


const BlogPost1 = () => {
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
          China M&A Market Review
        </Typography>
        <Typography className={blogStyles.blogTitleDescription} style={{ textAlign: 'center' }}>
           An Introductory Guide For Foreign Investors
          <br />
          Published on 2023
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          China M&A Market
        </Typography>
        <img className={blogStyles.blogImage} src={fig1} alt='China M&A' />
        <Typography className={blogStyles.blogText}>
        China is one of the most active countries in M&A worldwide and has witnessed many market changes in recent years. 
        At this stage of China’s industrial transformation and upgrading, the country’s potential is attracting foreign investors 
        to engage more intensely in the local M&A market.
         <br /><br />
         As the regulatory system is complex but continues to develop, foreign companies often encounter problems in the investment process. 
         In this article, we provide an overview of the Chinese M&A market, exploring investment opportunities as well as 
         identifying potential risks of investing in China.
        </Typography>

        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
        China’s 2021 M&A Market 
        </Typography>
        <Typography className={blogStyles.blogText} >
        In 2021, the global publicly disclosed value of M&A deals exceeded 5.1 trillion USD in China, hitting a new all-time high. 
         The total number of M&A deals increased by 21% to a record high of 12,790. Nevertheless, the total transaction value declined 19% to 637.4 billion USD, falling back to normal levels.
         This, after the unusually large transaction values of 2020, where the government and SOEs had promoted several large transactions (exceeding 1 billion USD) which totaled a value of 88 billion USD more than in 2021.
         <br /><br />
         However, in 2021, China’s actual use of foreign investment exceeded 1 trillion for the first time,
          reaching 150 billion USD with a year-on-year growth of 14.9%, showing foreign investors’
           long-term confidencein the Chinese market.
         <br /><br />
         The first chart below gives a better illustration of the growth of number of M&A deals and transaction values. 
         The second graph illustrates the deal numbers by type of transactions.
        </Typography>
        <img className={blogStyles.blogImage} src={fig2} alt='M&A data' />
        <img className={blogStyles.blogImage} src={fig3} alt='M&A data' />
        <br /><br />

        <Typography className={blogStyles.blogText} >
         Due to the new securities law released in 2020, the market has been confronted with more uncertainties 
        and investors have become increasingly more cautious towards risks. Along with the law, a series of new regulations 
         were also launched to strengthen the government’s supervision over M&A activities in China. For example, 
         one regulation requires securities companies to enhance internal control and internal information management, 
         eading to a rise in investors’ concerns over potential compliance issues in M&A practices. 
         As a result, many investors adopted a more conservative attitude towards investment in China in 2021.
        </Typography>

        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
        Most Active Cities & Provinces for M&A Activities
        </Typography>
        <img className={blogStyles.blogImage} src={fig4} alt='China Province Photo' />
        <Typography className={blogStyles.blogText} >
        Geographically, China’s M&A market is relatively concentrated, with Beijing, Shanghai, Jiangsu, Zhejiang, and Guangdong accounting for about half of the M&A market. 
        Among the five regions, Beijing had the largest M&A market in terms of transaction values, which reached 29 billion USD in 2021.
        <br /><br />
        Guangdong, on the other hand, was the leading province in number of transactions with 332 transactions in 2021, contributing 26 billion USD of the total transaction value in China. 
        While Guangdong is famous for its strengths in the manufacturing industry, Shanghai, Jiangsu, and Zhejiang attract investors looking for opportunities in the technology industry.

        <br /><br />
        These regions have a business-friendly environment, a solid industrial base, and rapidly developing high-tech industries, 
        making them preferred locations for M&A by companies both domestically and internationally.

        <br /><br />
        The M&A industry is facing unprecedented pressure from the macro environment, which, on the other hand, has also driven the transformation and upgradation 
        of the industries. In 2021, most of the large M&A deals (exceeding 1 billion USD) focused on key economic themes such as industrial upgrading, 
        fostering dual circulation, and carbon peaking by 2030, accounting for more than 100 billion USD. These have become popular themes 
        in the Chinese M&A market and have fueled the development of semiconductor and electronics, biotech/healthcare, 
        cleantech and automotive industries, bringing new opportunities to investors.
        <br /><br />
        The retail and business services sector were the most attractive for foreign investments, 
        while the manufacturing and technology sectors such as IT, semiconductors and electronics are 
        receiving increasing attention from domestic investors.
        <br /><br />
        <img className={blogStyles.blogImage} src={fig5} alt='M&A by industry' />
        <br /><br />
        </Typography>

        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
         Types of M&A Transactions
        </Typography>
        <Typography className={blogStyles.blogText} >
        China classifies M&A activities based on four common classification criteria used by the China Securities Regulatory Commission.
        </Typography>
        <img className={blogStyles.blogImage} src={fig6} alt='M&A type' />
        <Typography className={blogStyles.blogText} >
        When it comes to the M&A practices in China, acquiring domestic companies tends to be difficult for foreign companies, 
        especially if the target companies are state-owned. As such, mergers have become a popular method for foreign investors to enter the market.
        <br /><br />
        Share acquisition agreement and tender offers are generally less common because of the high complexity and costs.
         Instead, buyers tend to acquire control of another company by purchasing private shares. 
         Compared with private shares, acquisition of shares in the secondary market are riskier, 
         which may lead to a rise in the stock price in the short term and a less preferable choice to buyers.
         <br /><br />
         In practice, foreign investors often start by setting up a legal entity in mainland China or Hong Kong,
          and then use the entity to carry out investment activities in the mainland. 
          As the Chinese government has certain restrictions on which industries foreign investors can invest in, 
          such approach can facilitate the process for foreign investors when entering certain industries.
        </Typography>


        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
        Outlook for M&A Activities in China
        </Typography>
        <img className={blogStyles.blogImage} src={fig7} alt='M&A outlook China' />
        <Typography className={blogStyles.blogText} >
        While many institutions show a grim forecast, foreign investors still have confidence in the Chinese market, 
        especially the high-tech industries. According to Bloomberg, foreign direct investment in China’s 
        high-tech manufacturing sector rose by 31.1% in the first six months of 2022, 
        with Korean investment rising 37.2% and US investment growing 26.1%.
        <br /><br />
        At the end of 2021, there were a total of 355 foreign private equity fund managing companies on the Chinese market, a
         year-on-year increase of 13.8%. Despite the new regulations effects on the M&A market, 
         the gradual refinement of policies is improving the investment environment and benefits for investors in the long term.
         <br /><br />
         Fueled by the supporting policies, the industry consolidation and upgradation are also predicted to bring new opportunities to the Chinese M&A market.
          Thanks to the “carbon neutrality and net-zero carbon” policy, M&A activities in new energy industries,
           especially in wind power generation and photovoltaic power generation, are expected to rocket in China.
           <br /><br />
           At the same time, in line with the global blockchain and cryptocurrency investment boom, 
           the data industry in China, including generation, transmission, storage, mining, and application of data, 
           is predicted to expand rapidly in the coming years as well. China’s healthcare industry is also expecting continued growth 
           due to the pandemic and aging of population.
           <br /><br />
           The inflow of capital into emerging industries will be accompanied by a significant increase in bankruptcies 
           nd restructuring in traditional industries. More professional M&A activities will inevitably drive the rise
           of emerging industries while eliminating traditional ones.
        </Typography>

        <Typography className={blogStyles.blogText} style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          Keen to explore M&A in China? Contact us on +(xx) XXXX-XXXX and let us connect you to opportunities in Asia's rising dragon  
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default withTheme(BlogPost1);