import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <li>{message}</li>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
