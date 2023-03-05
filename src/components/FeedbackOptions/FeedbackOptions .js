import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button onClick={() => onLeaveFeedback('good')}>Good</Button>
      <Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
      <Button onClick={() => onLeaveFeedback('bad')}>Bad</Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
