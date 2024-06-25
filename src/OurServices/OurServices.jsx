import HeaderTitle from '../shared/HeaderTitle/HeaderTitle';
import './OurServices.css';
import arrow from '../assets/arrow.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import Button from '../shared/Button/Button';

const OurServices = () => {
  return (
    <div className="our-service-section">
      <HeaderTitle
        subTitle={'Our Services'}
        title={'Testimonials From Our Valued Clients'}
      ></HeaderTitle>
      <div className="our-service-container">
        <div className="card-container">
          <div className="logo-container">
            <img src={logo1} alt="" />
          </div>
          <h3>Web Development</h3>
          <hr />
          <p>
            A reputable IT company should possess a high level of technical
            expertise. This includes having a team of skilled professionals.We
            assess your to current Helping businesses.
          </p>
          <button>
            Read More <img src={arrow} alt="" />
          </button>
        </div>
        <div className="card-container">
          <div className="logo-container">
            <img src={logo2} alt="" />
          </div>
          <h3>UI/UX Design</h3>
          <hr />
          <p>
            A reputable IT company should possess a high level of technical
            expertise. This includes having a team of skilled professionals.We
            assess your to current Helping businesses.
          </p>
          <button>
            Read More <img src={arrow} alt="" />
          </button>
        </div>
        <div className="card-container">
          <div className="logo-container">
            <img src={logo3} alt="" />
          </div>
          <h3>Web Design</h3>
          <hr />
          <p>
            A reputable IT company should possess a high level of technical
            expertise. This includes having a team of skilled professionals.We
            assess your to current Helping businesses.
          </p>
          <button>
            Read More <img src={arrow} alt="" />
          </button>
        </div>
        <div className="card-container">
          <div className="logo-container">
            <img src={logo4} alt="" />
          </div>
          <h3>Web App Development</h3>
          <hr />
          <p>
            A reputable IT company should possess a high level of technical
            expertise. This includes having a team of skilled professionals.We
            assess your to current Helping businesses.
          </p>
          <button>
            Read More <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="service-btn">
        <Button text={'View All Services'}></Button>
      </div>
    </div>
  );
};

export default OurServices;
