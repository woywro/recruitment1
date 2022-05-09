import { useState } from 'react';
import { MobileNav } from '../MobileNav';
import { MenuButton, MobileNavbarWrapper } from './style';
import { AiOutlineMenu } from 'react-icons/ai';

export const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <MobileNavbarWrapper>
      <MenuButton onClick={() => setOpen(!open)}>
        <AiOutlineMenu
          size={'25px'}
          fill={'white'}
          onClick={() => setOpen(!open)}
        />
      </MenuButton>
      <MobileNav open={open} setOpen={setOpen} />
    </MobileNavbarWrapper>
  );
};
