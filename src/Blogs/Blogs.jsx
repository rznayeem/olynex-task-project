import Button from '../shared/Button/Button';
import './blogs.css';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <div>
          <h1 className="jakarta explore-blogs">Explore Our News and Blogs</h1>
          <p className="blogs-description inter">
            Your success is our success and together we help our society to
            become a better place to live and work., meals and diet, mobility,
            and incontinence step.
          </p>
        </div>
        <div>
          <Button text={'View All Blogs'}></Button>
        </div>
      </div>
      <div className="testimonial-cards">
        <div className="testimonial-card jakarta">
          <img src={card1} alt="" />
          <div className="card-body">
            <div className="date-container">
              <p className="trend inter">Trends</p>
              <p className="date inter">12 June, 2023</p>
            </div>
            <h1 className="card-title">
              New Device Invention for Digital Platform
            </h1>
            <p className="card-description">
              But the team has been super welcoming in and I couldn’t be happier
              with my decision to join our team.
            </p>
            <button>
              Read More <IoArrowForwardCircleOutline className="btn-arrow" />
            </button>
          </div>
        </div>
        <div className="testimonial-card jakarta">
          <img src={card2} alt="" />
          <div className="card-body">
            <div className="date-container">
              <p className="trend inter">Trends</p>
              <p className="date inter">12 June, 2023</p>
            </div>
            <h1 className="card-title">
              New Device Invention for Digital Platform
            </h1>
            <p className="card-description">
              But the team has been super welcoming in and I couldn’t be happier
              with my decision to join our team.
            </p>
            <button>
              Read More <IoArrowForwardCircleOutline className="btn-arrow" />
            </button>
          </div>
        </div>
        <div className="testimonial-card jakarta">
          <img src={card3} alt="" />
          <div className="card-body">
            <div className="date-container">
              <p className="trend inter">Trends</p>
              <p className="date inter">12 June, 2023</p>
            </div>
            <h1 className="card-title">
              New Device Invention for Digital Platform
            </h1>
            <p className="card-description">
              But the team has been super welcoming in and I couldn’t be happier
              with my decision to join our team.
            </p>
            <button>
              Read More <IoArrowForwardCircleOutline className="btn-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
