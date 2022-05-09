import Image from 'next/image';
import { Text } from '../../../../components/Text';
import { PokemonInterface } from '../../../../types/PokemonInterface';
import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';

interface Props {
  pokemon: PokemonInterface;
}

export const Showcase = ({ pokemon }: Props) => {
  return (
    <Wrapper>
      <div>
        <Image
          src={pokemon.sprite}
          alt={pokemon.species}
          width="150px"
          height="150px"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
          loading="lazy"
        ></Image>
      </div>
      <Text
        style={{
          fontFamily: "'Pokemon Solid', sans-serif",
          fontSize: '40px',
        }}
      >
        {pokemon.species}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: a;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  @media only screen and ${breakpoints.device.sm} {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;
