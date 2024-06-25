import './aboutCompany.css';
import man from '../assets/man.png';
import group from '../assets/group.png';
import radial from '../assets/radial.png';
import arrow from '../assets/arrow.png';

const AboutCompany = () => {
  return (
    <div className="about-container">
      <div className="company-img-container">
        <img src={man} alt="" />
        <div className="radial-content-container">
          <div className="radial-content">
            <img src={radial} alt="" />
            <div className="happy-clients">
              <h3>75%</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="group-img-container">
          <img className="group-img" src={group} alt="" />
        </div>
      </div>
      <div className="about-content">
        <div className="about-header inter">
          <p>About Our Company</p>
        </div>
        <h1 className="jakarta">
          Bringing New IT Business Solutions And Ideas
        </h1>
        <p className="inter about-description">
          We provide strategic IT consulting services to help businesses align
          their technology goals with their overall business objectives,
          enabling them to make informed decisions and stay ahead in the
          competitive.
          <br />
          <br />
          Specific physical needs of the care recipient with regards to bathing
          and the grooming,meals and diet, mobility incontinence.
        </p>
        <div className="about">
          <div>
            <h1>15</h1>
            <h3>Years of Experience</h3>
          </div>
          <div>
            <h1>512</h1>
            <h3>Projects Completed</h3>
          </div>
          <div>
            <h1>212</h1>
            <h3>Active Clients</h3>
          </div>
        </div>
        <div className="explore-button jakarta">
          <button>
            Explore More <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
