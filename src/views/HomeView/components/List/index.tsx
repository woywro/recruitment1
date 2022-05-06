import Link from 'next/link';
import styled from 'styled-components';
import { pokemonSpeciesFormatter } from '../../../../utils/pokemonSpeciesFormatter';
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

const ListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

const PokemonListItem = styled.li`
  background: white;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 10px;
  margin: 2px;
  cursor: pointer;
`;
