import PropTypes from 'prop-types';
import './HeaderTitle.css';

const HeaderTitle = ({ subTitle, title }) => {
  return (
    <div>
      <div className="header-container">
        <h4 className="inter">{subTitle}</h4>
        <h1 className="jakarta">{title}</h1>
      </div>
    </div>
  );
};

HeaderTitle.propTypes = {
  subTitle: PropTypes.any,
  title: PropTypes.any,
};

export default HeaderTitle;
