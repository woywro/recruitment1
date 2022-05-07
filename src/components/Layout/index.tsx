import styled from 'styled-components';
import { NavBar } from '../NavBar';
import breakpoints from '../../theme/breakpoints';
import { MobileNavBar } from '../MobileNavBar';
import { Wrapper, ViewBox } from './style';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <ViewBox>
        <MobileNavBar />
        <NavBar />
        <>{children}</>
      </ViewBox>
    </Wrapper>
  );
};
