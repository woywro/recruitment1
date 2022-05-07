import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  CloseButton,
  MobileNavItem,
  MobileNavItems,
  MobileNavWrapper,
} from './style';

interface Props {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export const MobileNav = ({ open, setOpen }: Props) => {
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router]);

  return (
    <MobileNavWrapper open={open}>
      <CloseButton onClick={() => setOpen(false)}>x</CloseButton>
      <MobileNavItems>
        <MobileNavItem
          isActive={router.pathname == '/' ? true : false}
          onClick={() => router.push('/')}
        >
          Home
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == '/compare' ? true : false}
          onClick={() => router.push('/compare')}
        >
          Compare
        </MobileNavItem>
      </MobileNavItems>
    </MobileNavWrapper>
  );
};
