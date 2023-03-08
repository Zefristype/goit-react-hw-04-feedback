import PropTypes from 'prop-types';
import { Section as Wrapper } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
