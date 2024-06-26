import './newsletter.css';
import arrow from '../assets/arrow.png';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h1 className="jakarta">Subscribe our Newsletter</h1>
          <p className="inter">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form, by injecte
          </p>
        </div>
        <div className="newsletter-form">
          <input
            type="text"
            className="newsletter-input inter"
            placeholder="Email Address"
            id=""
          />
          <button className="jakarta">
            View All Blogs <IoArrowForwardCircleOutline className="btn-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
