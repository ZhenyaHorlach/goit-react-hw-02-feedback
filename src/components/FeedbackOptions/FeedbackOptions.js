import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div className={s.btnBox}>
      {options.map(option => (
          <button
          onClick={() => { onClick (option)}}
          className={s.button}
          key={option}
          >
            {option}
          </button>
      ))}
    </div>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default FeedbackOptions;