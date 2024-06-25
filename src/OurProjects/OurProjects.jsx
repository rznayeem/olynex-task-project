import './ourProjetcs.css';
import arrowRight from '../assets/circle-arrow-up-right.png';
import Button from '../shared/Button/Button';

const OurProjects = () => {
  return (
    <div className="projects-container">
      <div>
        <div className="projects-header">
          <div>
            <h3>Our Projects</h3>
            <h1>Explore Recent Projects</h1>
          </div>
          <p>
            Specific physical needs of the care recipient with regards to
            bathing and the grooming, dressing, meals and diet, mobility, and
            incontinence step.
          </p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div>
                <h3 className="jakarta">Web Applicaton</h3>
                <p className="inter">
                  There are many variatons of passages of Lorem Ipsum available,
                  but the majority have suffered
                </p>
              </div>
              <img src={arrowRight} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div>
                <h3 className="jakarta">Web Applicaton</h3>
                <p className="inter">
                  There are many variatons of passages of Lorem Ipsum available,
                  but the majority have suffered
                </p>
              </div>
              <img src={arrowRight} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div>
                <h3 className="jakarta">Web Applicaton</h3>
                <p className="inter">
                  There are many variatons of passages of Lorem Ipsum available,
                  but the majority have suffered
                </p>
              </div>
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
        <div className="projects-btn">
          <Button text={'View All Projects'}></Button>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
