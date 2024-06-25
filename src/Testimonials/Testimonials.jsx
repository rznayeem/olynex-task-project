import HeaderTitle from '../shared/HeaderTitle/HeaderTitle';
import './testimonials.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import avater1 from '../assets/avater1.png';
import avater2 from '../assets/avater2.png';
import avater3 from '../assets/avater3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoMdStar } from 'react-icons/io';

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <HeaderTitle
          subTitle={'Testimonials'}
          title={'Testimonials From Our Valued Clients'}
        ></HeaderTitle>
        <div className="swiper-card-container">
          <Swiper
            loop={true}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={true}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <div className="testimonial-card-container">
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater1} alt="" />
                    <div>
                      <h3>Jhone Weak</h3>
                      <h4>4 month ago</h4>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater2} alt="" />
                    <div>
                      <h3>Wade Warren</h3>
                      <h4>11 month ago</h4>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater1} alt="" />
                    <div>
                      <h3>Jhone Weak</h3>
                      <h4>4 month ago</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="testimonial-card-container">
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater1} alt="" />
                    <div>
                      <h3>Jhone Weak</h3>
                      <h4>4 month ago</h4>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater2} alt="" />
                    <div>
                      <h3>Wade Warren</h3>
                      <h4>11 month ago</h4>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater3} alt="" />
                    <div>
                      <h3>Jhone Weak</h3>
                      <h4>4 month ago</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="testimonial-card-container">
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater1} alt="" />
                    <div>
                      <h3>Jhone Weak</h3>
                      <h4>4 month ago</h4>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater2} alt="" />
                    <div>
                      <h3>Wade Warren</h3>
                      <h4>11 month ago</h4>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content">
                  <div className="star-container">
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                    <IoMdStar className="star" />
                  </div>

                  <p>
                    I genuinely cannot express mythey appreciation and
                    commendation for this team enough.Over the years, at
                    property owner, I&apos;ve engaged with a numerous
                    contractors and services providers. However, this team more
                    most dedication and proficiency the have any genuinely stood
                    out.
                  </p>
                  <hr />
                  <div className="avater-container">
                    <img src={avater1} alt="" />
                    <div>
                      <h3>Jhone Weak</h3>
                      <h4>4 month ago</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
