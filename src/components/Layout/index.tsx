import { MobileNavBar } from '../MobileNavBar';
import { NavBar } from '../NavBar';
import { ChildrenWrapper, ViewBox, Wrapper } from './style';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <ViewBox>
        <MobileNavBar />
        <NavBar />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ViewBox>
    </Wrapper>
  );
};
