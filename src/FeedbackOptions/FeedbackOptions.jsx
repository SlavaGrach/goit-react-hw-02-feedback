import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  options = Object.keys(options);

  return (
    <div>
      {options.map(option => (
        <button onClick={onLeaveFeedback} name={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onChangeStatistics: PropTypes.func.isRequired,
};

export default FeedbackOptions;
