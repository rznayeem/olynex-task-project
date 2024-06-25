import arrow from '../../assets/arrow.png';
import './Button.css';

const Button = ({ text }) => {
  return (
    <div className="common-button jakarta">
      <button>
        {text} <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default Button;
