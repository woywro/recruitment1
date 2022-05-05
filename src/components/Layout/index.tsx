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
        <ChildrenWrapper>{children}</ChildrenWrapper>
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
  padding: 0;
  background: ${(props) => props.theme.colors.gradient};
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
