import styled from 'styled-components';
import { NavBar } from '../NavBar';
import breakpoints from '../../theme/breakpoints';
import { MobileNavBar } from '../MobileNavBar';

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

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props) => props.theme.colors.gradient};
`;

const ViewBox = styled.div`
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: start;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 18px rgba(255, 255, 255, 0.3);
  background: ${(props) => props.theme.colors.primaryBg};
  @media only screen and ${breakpoints.device.sm} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
`;
