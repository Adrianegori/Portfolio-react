import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo2.png';
import user_icon from '../../assets/user_icon.svg';
import facebook_icon from '../../assets/facebook.svg';
import instagram_icon from '../../assets/instagram.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am an IT student from Western Institute of Technology</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your Email'/>
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">© 2025 Adriane Leberiaga. All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
            <div className="footer-social-media">
              <a href="https://www.facebook.com/aleberiaga/" target="_blank" rel="noopener noreferrer">
                <img src={facebook_icon} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/adriane_gori/" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
