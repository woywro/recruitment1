import styled, { css } from 'styled-components';

export const NavBarWrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const Item = styled.div<{ isActive?: boolean }>`
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 24px;
  background: none;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryText};
  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(0, 0, 0, 0.1);
      border-radius: 20px;
    `};
  &:hover:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const NavItemText = styled.p`
  margin-left: 4px;
`;
