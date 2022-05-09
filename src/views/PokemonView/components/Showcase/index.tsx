import Image from 'next/image';
import { Text } from '../../../../components/Text';
import { PokemonInterface } from '../../../../types/PokemonInterface';
import { Wrapper } from './style';

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
