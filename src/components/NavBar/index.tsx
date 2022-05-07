import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { Item, Links, NavItemText } from './style';

export const NavBar = () => {
  const router = useRouter();

  return (
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
  );
};
