import { MobileNavBar } from '../MobileNavBar';
import { NavBar } from '../NavBar';
import { ChildrenWrapper, ViewBox, LayoutWrapper } from './style';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <ViewBox>
        <MobileNavBar />
        <NavBar />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ViewBox>
    </LayoutWrapper>
  );
};
