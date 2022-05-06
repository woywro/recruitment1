import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const MobileNavbarWrapper = styled.nav`
  display: none;
  width: 100%;
  height: 90px;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gradient};
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
  }
  @media only screen and ${breakpoints.device.lg} {
    display: flex;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: white;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  position: absolute;
  left: 15px;
  cursor: pointer;
`;
