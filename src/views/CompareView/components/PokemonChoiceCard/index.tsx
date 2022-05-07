import styled from 'styled-components';
import { Text } from '../../../../components/Text';

export const PokemonChoiceCard = ({
  pokemons,
  comparisionCards,
  setComparisionCards,
  getPokemon,
  id,
}) => {
  const handleAddToComparision = (id, pokemon) => {
    getPokemon({
      variables: { pokemon: pokemon.toLowerCase() },
    }).then((res) => {
      const createdSlot = comparisionCards.map((el) =>
        el.id === id ? { ...el, item: res.data.getPokemon } : el
      );
      setComparisionCards(createdSlot);
    });
  };

  return (
    <List>
      {pokemons.map((pokemon: string) => {
        return (
          <ListItem onClick={() => handleAddToComparision(id, pokemon)}>
            <Text>{pokemon}</Text>
          </ListItem>
        );
      })}
    </List>
  );
};

const List = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  jusitify-content: flex-start;
  align-items: start;
  padding: 10px;
`;

const ListItem = styled.div`
  width: 100%;
  padding: 5px;
`;
