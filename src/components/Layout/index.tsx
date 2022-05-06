import styled from 'styled-components';
import { NavBar } from '../NavBar';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <ViewBox>
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
`;
