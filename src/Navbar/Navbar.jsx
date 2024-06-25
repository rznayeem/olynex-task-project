import { IoIosArrowDown } from 'react-icons/io';
import Logo from '../shared/Logo/Logo';
import call from '../assets/call.png';
import arrow from '../assets/arrow.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo></Logo>
      <div className="nav-menu inter">
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
          <img src={call} alt="" />
          <h3 className="contact">+1 (888) 423-3526</h3>
        </div>
        <button>
          Get A Quote <img src={arrow} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
