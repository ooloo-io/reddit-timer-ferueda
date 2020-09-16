import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.article`
  margin: 105px auto 0 auto;
  width: 738px;
  min-height: 81px;
`;

const Heading = styled.h2`
  text-align: left;
`;

const Content = styled.div`
  margin-top: 13px;
`;

const Info = React.forwardRef(({ heading, children }, ref) => (
  <Wrapper>
    <Heading ref={ref}>{heading}</Heading>
    <Content>{children}</Content>
  </Wrapper>
));

Info.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Info;
