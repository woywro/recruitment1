import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { useTheme } from 'styled-components';
import { Item, Links, NavBarWrapper, NavItemText } from './style';

export const NavBar = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <NavBarWrapper>
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
    </NavBarWrapper>
  );
};
