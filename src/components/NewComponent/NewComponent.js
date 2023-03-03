import PropTypes from 'prop-types';
import { Section } from './NewComponent.styled';

export default function NewComponent({ props }) {
  return (
    <Section>
      {props.map(({ id, avatar, name, isOnline }) => (
        <div key={id}>
          <div>{name}</div>
          <div>{isOnline && 'online'}</div>
        </div>
      ))}
    </Section>
  );
}

NewComponent.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
