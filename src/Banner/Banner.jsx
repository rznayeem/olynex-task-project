import './banner.css';
import vector from '../assets/vector.png';
import play from '../assets/play-circle.svg';
import playBg from '../assets/Vector-2.png';
import arrow from '../assets/arrow.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-header">
            <p>Over 20+ Years of Experience</p>
          </div>
          <h1 className="jakarta">
            Empowering Your Business with Best IT Solutions
          </h1>
          <p className="inter banner-description">
            We are a technology consultancy and software delivery partner.We
            work with innovative leaders to deliver their solutions from vision
            to reality.
          </p>
          <div className="banner-button jakarta">
            <button>
              Our services <img src={arrow} alt="" />
            </button>
            <h2>
              <span>
                <img src={playBg} alt="" />
                <img className="play-btn" src={play} alt="" />
              </span>{' '}
              See Videos
            </h2>
          </div>
        </div>
        <div className="image-layer-container">
          <div className="banner-img-container">
            <div className="img-border"></div>
            <div className="img-background"></div>
            <div className="photo">
              <div className="img-container">
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
