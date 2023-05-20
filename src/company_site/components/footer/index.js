import React from 'react';
import Typography from '@material-ui/core/Typography';
import './footer.css';
import Button from '@material-ui/core/Button';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
  return (
    <div id='footer'>
    <footer id="footer-container">
      <div id="footer-wrapper">
        <div id="footer-links-container">
          <div className="footer-links-wrapper">
            <div className='footer-link-items'>
              <h1 className="footer-link-title">Mira Capital Markets</h1>
              <small>
               Mergers & Acquisitions (M&A) Specialist for entrepreneurs and businesses across Asia-Pacific
              </small>
              <h1 className="footer-address">Contact Details</h1>
              <small>
                10 Capital Street #11-11 Capital Tower (Lobby A) Singapore XXXXXX
              </small>
              <div>
                <div className='footer-contact'>
                  <MailIcon/>
                  <a className='footer-email' href="ToBeConfirmed@Pan-Pacific-Partners.sg">
                  <small> ToBeConfirmed@Mira-Capital.sg </small>
                  </a>
                </div>
                <div className='footer-contact'>
                  <LocalPhoneIcon/>
                  <small>+(65) XXXX XXXX</small>
                </div>

                <div>
                </div>


              </div>
            </div>
            <div className="footer-link-items">
              {/* <h1 className="footer-link-title">t</h1>
              <a
                className="footer-link"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Official
              </a>
              <a
                className="footer-link"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Manual
              </a>
              <a
                className="footer-link"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Center
              </a>
              <a
                className="footer-link"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                 Manual
              </a> */}
              {/* <a
                className="footer-link"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Specifications
              </a> */}
            </div>
          </div>
        </div>
        <section id="social-media">
          <div id="social-media-wrap">
          <small id="website-rights">
            Mira Capital Markets © {new Date().getFullYear()} All Rights Reserved
            </small>
            {/* <div id="social-icons">
              <a
                className="social-icon-link"
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="social-icon-link"
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="social-icon-link"
                href="https://www.linkedin.com/in/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              </div>*/}
          </div>
          {/* <nav className="nav-btn">
              <Button href="/signin" variant="outlined" color="secondary">
                Portal
              </Button>
              <LinkR className="nav-btn-link" to="/signin">Sign In</LinkR>
            </nav> */}
        </section>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
