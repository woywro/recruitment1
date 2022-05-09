import styled from 'styled-components';
export const LogoText = styled.h1<{ mobile?: boolean }>`
  font-family: 'Pokemon Solid', sans-serif;
  font-size: ${(props) => (props.mobile ? '20px' : '30px')};
  color: ${(props) => (props.mobile ? 'white' : 'black')};
  margin-left: 20px;
  cursor: pointer;
`;
