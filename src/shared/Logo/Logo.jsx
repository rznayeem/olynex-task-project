import logo from '../../assets/logo.png';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <div>
        <h3 className="jakarta">MasterTech</h3>
        <p className="roboto">We are Best for You</p>
      </div>
    </div>
  );
};

export default Logo;
