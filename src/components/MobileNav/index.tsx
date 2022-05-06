import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../Button';
import { useCallback } from 'react';
import {
  MobileNavWrapper,
  MobileNavItems,
  MobileNavItem,
  CloseButton,
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
          whileTap={{ scale: 0.9 }}
        >
          Home
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == '/compare' ? true : false}
          onClick={() => router.push('/compare')}
          whileTap={{ scale: 0.9 }}
        >
          Compare
        </MobileNavItem>
      </MobileNavItems>
    </MobileNavWrapper>
  );
};
