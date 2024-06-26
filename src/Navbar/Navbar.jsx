import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../shared/Logo/Logo';
import call from '../assets/call.png';
import arrow from '../assets/arrow.png';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <Logo />
      <div className={`nav-menu inter ${isMenuOpen ? 'open' : ''}`}>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Services</h3>
        <h3>
          Pages <IoIosArrowDown />
        </h3>
        <h3>Blogs</h3>
        <h3>Contact</h3>
      </div>
      <div className="nav-end jakarta">
        <div className="call">
          <img src={call} alt="call" />
          <h3 className="contact">+1 (888) 423-3526</h3>
        </div>
        <button>
          Get A Quote <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
