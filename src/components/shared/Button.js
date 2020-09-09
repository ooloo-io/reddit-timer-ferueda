import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBtn = styled(Link)`
  background-color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => theme.button.fontSize};
  color: ${({ theme }) => theme.color.white};
  line-height: ${({ theme }) => theme.button.lineHeight};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  height: ${({ theme }) => theme.button.height};
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = ({ children, to, className }) => (
  <StyledBtn className={className} to={to}>
    {children}
  </StyledBtn>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
