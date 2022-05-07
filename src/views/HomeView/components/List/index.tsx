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
      {pokemons.map((pokemon) => (
        <Link href={`pokemon/${pokemonSpeciesFormatter(pokemon)}`}>
          <PokemonListItem key={pokemon}>{pokemon}</PokemonListItem>
        </Link>
      ))}
    </ListWrapper>
  );
};
