import Marquee from 'react-fast-marquee';
import './imageSlider.css';

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Marquee speed={100}>
        <div className="image-container">
          <img src="https://i.imgur.com/3vJPXQw.png" alt="" />
          <img src="https://i.imgur.com/K0Mo9Eo.png" alt="" />
          <img src="https://i.imgur.com/y0eV8mo.png" alt="" />
          <img src="https://i.imgur.com/h5TLn4N.png" alt="" />
          <img src="https://i.imgur.com/SU5ewr4.png" alt="" />
          <img src="https://i.imgur.com/3vJPXQw.png" alt="" />
          <img src="https://i.imgur.com/K0Mo9Eo.png" alt="" />
          <img src="https://i.imgur.com/y0eV8mo.png" alt="" />
          <img src="https://i.imgur.com/h5TLn4N.png" alt="" />
          <img src="https://i.imgur.com/SU5ewr4.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default ImageSlider;
