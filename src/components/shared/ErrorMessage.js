import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Headline = styled.h2`
  text-align: center;
  margin-top: 50px;
`;

const ErrorMessage = ({ message = ErrorMessage.defaultProps.message }) => (
  <Headline>{message}</Headline>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 'An error ocurred. Please refresh.',
};

export default ErrorMessage;
