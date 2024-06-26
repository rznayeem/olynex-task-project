import { IoLogoFacebook, IoLogoYoutube } from 'react-icons/io5';
import Logo from '../shared/Logo/Logo';
import './footer.css';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container inter">
        <div className="footer-content">
          <div>
            <Logo></Logo>
            <p className="footer-description">
              Vates specializes in custom software development and IT solutions
              that can elevate how your business works and help your customers
              too. We pride ourselves in providing the highest quality of
              solutions{' '}
            </p>
            <div className="social-icons">
              <a href="">
                <IoLogoFacebook className="social-icon" />
              </a>
              <a href="">
                <FaLinkedinIn className="social-icon" />
              </a>
              <a href="">
                <IoLogoYoutube className="social-icon" />
              </a>
              <a href="">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-menu">
            <h1 className="jakarta">Company</h1>
            <p>About</p>
            <p>Our Service</p>
            <p>Company</p>
            <p>Projects</p>
            <p>Blogs</p>
            <p>Contact</p>
          </div>
          <div className="footer-menu">
            <h1 className="jakarta">Company</h1>
            <p>Start here</p>
            <p className="passP">Password protected</p>
            <p>404 Not found</p>
            <p>Licenses</p>
            <p>Style guide</p>
            <p>Changelog</p>
          </div>
          <div className="footer-contact">
            <h1 className="jakarta">Email & Phone</h1>
            <div className="mail">
              <FiPhoneCall className="icons" />
              <div>
                <p>info@ihawmd.com</p>
                <p>info@ihawmd.com</p>
              </div>
            </div>
            <div className="mail">
              <MdOutlineEmail className="icons" />
              <div>
                <p>info@ihawmd.com</p>
                <p>info@ihawmd.com</p>
              </div>
            </div>
            <div className="mail">
              <FiPhoneCall className="icons" />
              <div>
                <p>info@ihawmd.com</p>
                <p>info@ihawmd.com</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>
            Copyright MasterTech ©2024 All Rights Reserved A. Licensing
            MasterTech Templates <br /> digital. Powered by Ah Anwar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
