import { useRouter } from 'next/router';
import { LogoText } from './style';

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
