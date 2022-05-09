import Link from 'next/link';
import { pokemonSpeciesFormatter } from '../../../../utils/pokemonSpeciesFormatter';
import { ListWrapper, PokemonListItem } from './style';

interface Props {
  pokemons: string[];
}

export const List = ({ pokemons }: Props) => {
  return (
    <ListWrapper>
      {pokemons.map((pokemon: string) => (
        <Link
          href={`pokemon/${pokemonSpeciesFormatter(pokemon)}`}
          key={pokemon}
        >
          <PokemonListItem>{pokemon}</PokemonListItem>
        </Link>
      ))}
    </ListWrapper>
  );
};
