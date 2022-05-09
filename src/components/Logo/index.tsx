import styled, { useTheme } from 'styled-components';
import Image from 'next/image';
import { ThemeInterface } from '../../types/ThemeInterface';
import { LogoText } from './style';
import { useRouter } from 'next/router';

interface Props {
  mobile?: boolean;
}

export const Logo = ({ mobile }: Props) => {
  const router = useRouter();
  return (
    <LogoText onClick={() => router.push('/')} mobile={mobile}>
      POKEMONS
    </LogoText>
  );
};
