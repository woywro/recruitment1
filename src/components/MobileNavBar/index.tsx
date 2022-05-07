import { useState } from 'react';
import { MobileNav } from '../MobileNav';
import { MenuButton, MobileNavbarWrapper } from './style';

export const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <MobileNavbarWrapper>
      <MenuButton>
        <div style={{ fill: 'white' }} onClick={() => setOpen(!open)}>
          M
        </div>
      </MenuButton>
      <MobileNav open={open} setOpen={setOpen} />
    </MobileNavbarWrapper>
  );
};
