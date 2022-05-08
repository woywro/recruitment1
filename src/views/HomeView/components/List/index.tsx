import Link from 'next/link';
import styled from 'styled-components';
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
          key={pokemon}
          href={`pokemon/${pokemonSpeciesFormatter(pokemon)}`}
        >
          <PokemonListItem>{pokemon}</PokemonListItem>
        </Link>
      ))}
    </ListWrapper>
  );
};
