import { useState } from 'react';
import { MobileNav } from '../MobileNav';
import { MenuButton, MobileNavbarWrapper } from './style';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Logo } from '../Logo';

export const MobileNavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <MobileNavbarWrapper>
      {router.pathname == '/pokemon/[id]' && (
        <MenuButton onClick={() => router.back()}>
          <AiOutlineArrowLeft size={'25px'} fill={'white'} />
        </MenuButton>
      )}
      <Logo mobile={true} />
      <MenuButton onClick={() => setOpen(!open)}>
        <AiOutlineMenu size={'25px'} fill={'white'} />
      </MenuButton>
      <MobileNav open={open} setOpen={setOpen} />
    </MobileNavbarWrapper>
  );
};
