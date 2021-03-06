import styled, { css } from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const Item = styled.div<{ isActive?: boolean }>`
  text-decoration: none;
  color: black;
  padding: 5px 20px;
  font-size: 24px;
  background: none;
  border: none;
  display: flex;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryText};
  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    `};
  &:hover:after {
    content: '';
    position: absolute;
    width: 100%;
    border-radius: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 80px;
  @media only screen and ${breakpoints.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoints.device.lg} {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin-right: 50px;
`;

export const NavItemText = styled.p`
  margin-left: 4px;
  font-size: 20px;
`;
