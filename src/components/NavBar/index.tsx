import Link from 'next/link';
import { useRouter } from 'next/router';
import { Item, NavItemText, Wrapper, Links } from './style';
import { Logo } from '../Logo';

export const NavBar = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Logo />
      <Links>
        <Link href={`/`} passHref>
          <Item isActive={router.pathname === '/' ? true : false}>
            <NavItemText>Home</NavItemText>
          </Item>
        </Link>
        <Link href={`/compare`} passHref>
          <Item isActive={router.pathname === '/compare' ? true : false}>
            <NavItemText>Compare</NavItemText>
          </Item>
        </Link>
      </Links>
    </Wrapper>
  );
};
