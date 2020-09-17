import styled from 'styled-components';

const StyledBtn = styled.button`
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

export default StyledBtn;
