import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  background: ${(props) => props.theme.colors.secondaryBgNoTransparent};
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: ${(props) => props.theme.shadow};
  width: 100%;
  &:focus {
    outline: none;
  }
`;
