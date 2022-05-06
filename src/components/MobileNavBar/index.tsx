import { useState } from 'react';
import { MobileNav } from '../MobileNav';
import { MenuButton, MobileNavbarWrapper, Title } from './style';
import { useRouter } from 'next/router';
import { Button } from '../Button';

export const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <MobileNavbarWrapper>
      <MenuButton>
        <Button
          size={25}
          style={{ fill: 'white' }}
          onClick={() => setOpen(!open)}
        >
          M
        </Button>
      </MenuButton>
      <MobileNav open={open} setOpen={setOpen} />
    </MobileNavbarWrapper>
  );
};
