import { MdOutlineEmail } from 'react-icons/md';
import './constactUs.css';
import arrow from '../assets/arrow.png';
import Button from '../shared/Button/Button';
import { IoCall } from 'react-icons/io5';
import { GoLocation } from 'react-icons/go';

const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="contact-container inter">
        <div className="contact-content">
          <p className="getIn">Get In Touch</p>
          <h1 className="jakarta">Ready to Become Our Happy Customer</h1>
          <p className="contact-paragraph">
            Trust your roofing and siding needs to VIS Exterior and get the to
            top-quality services we know you deserve.
          </p>
          <div className="mail">
            <MdOutlineEmail className="icons" />
            <div>
              <p>info@ihawmd.com</p>
              <p>info@ihawmd.com</p>
            </div>
          </div>
          <p className="contact-paragraph">You can find our Head Office at:</p>
          <div className="location">
            <GoLocation className="icons" />
            <p>
              Holborn Gate, 330 High Holborn <br /> London, WC1V 7QT
            </p>
          </div>
          <div className="contact-btn-container">
            <Button text={'Contact Us'}></Button>
            <div className="contact-number">
              <span className="dialer">
                <IoCall className="dialer-icon" />
              </span>
              <p>+1 (888) 423-3526</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form">
            <div className="title jakarta">Get in Touch with Us Today</div>

            <div className="user-input">
              <div className="input-container ic1">
                <input className="input" type="text" placeholder=" " />
                <div className="cut"></div>
                <label className="placeholder">First name</label>
              </div>
              <div className="input-container ic1">
                <input className="input" type="text" placeholder=" " />
                <div className="cut"></div>
                <label className="placeholder">Last name</label>
              </div>
              <div className="input-container ic1">
                <input className="input" type="email" placeholder=" " />
                <div className="cut"></div>
                <label className="placeholder">Email</label>
              </div>
              <div className="input-container ic1">
                <input className="input" type="number" placeholder=" " />
                <div className="cut"></div>
                <label className="placeholder">Phone</label>
              </div>
            </div>

            <div className="input-container ic2">
              <input className="input2" type="text" placeholder=" " />
              <div className="cut"></div>
              <label className="placeholder">Address</label>
            </div>
            <div className="input-container ic2">
              <select id="country" className="input3" name="country">
                <option value="Service Interested">Service Interested</option>
                <option value="Service Interested">Service Interested</option>
                <option value="Service Interested">Service Interested</option>
              </select>
            </div>
            <div className="input-container ic2">
              <textarea className="input4">Message</textarea>
            </div>
            <div className="input-button">
              <button>
                Send Massege <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
