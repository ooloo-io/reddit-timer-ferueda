import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.headline};
  letter-spacing: 0;
  min-height: 46px;
  margin-top: 26px;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #d5d5d5;
  margin: 0 10px;
  width: 370px;
  height: 36px;
  border-radius: 2px;
  background-color: #fff;
  padding-left: 16px;
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: 14px;
`;

const Label = styled.label`
  font-size: 18px;
  line-height: 0.5;
  color: #9e9e9e;
`;

const InputButton = styled.button`
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
  cursor: pointer;
`;

const SubredditForm = () => {
  const location = useLocation();
  const history = useHistory();

  const [inputValue, setInputValue] = useState(location.search.replace(/\?subreddit=/i, ''));

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== '') {
      history.push({
        pathname: ROUTES.SEARCH,
        search: `subreddit=${inputValue}`,
      });
    }
  };

  return (
    <Wrapper>
      <Title>Find the best time for a subreddit</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="subreddit">r/</Label>
        <Input id="subreddit" type="text" value={inputValue} onChange={handleInputChange} />
        <InputButton type="submit">Search</InputButton>
      </Form>
    </Wrapper>
  );
};

export default SubredditForm;
