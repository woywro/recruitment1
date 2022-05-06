import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border: 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &: disabled {
    background: #404040;
    cursor: auto;
  }
`;
