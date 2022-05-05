import Link from 'next/link';
import styled from 'styled-components';
interface Props {
  pokemons: string[];
}

export const List = ({ pokemons }: Props) => {
  return (
    <ListWrapper>
      {pokemons.map((pokemon) => (
        <Link href={`pokemon/${pokemon.toLowerCase()}`}>
          <PokemonListItem key={pokemon}>{pokemon}</PokemonListItem>
        </Link>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  justify-content: flex-start;
  align-items: start;
  list-style: none;
  padding: 20px;
`;

const PokemonListItem = styled.li`
  background: purple;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
`;
