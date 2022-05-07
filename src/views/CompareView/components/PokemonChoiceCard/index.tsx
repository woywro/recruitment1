import { useState } from 'react';
import styled from 'styled-components';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import { Text } from '../../../../components/Text';
import { pokemonSpeciesFormatter } from '../../../../utils/pokemonSpeciesFormatter';

export const PokemonChoiceCard = ({
  pokemons,
  comparisionCards,
  setComparisionCards,
  getPokemon,
  id,
}) => {
  const [loading, setLoading] = useState(false);

  const handleAddToComparision = (id, pokemon) => {
    setLoading(true);
    getPokemon({
      variables: { pokemon: pokemonSpeciesFormatter(pokemon) },
    }).then((res) => {
      const createdSlot = comparisionCards.map((el) =>
        el.id === id ? { ...el, item: res.data.getPokemon } : el
      );
      setComparisionCards(createdSlot);
      setLoading(false);
    });
  };

  return (
    <List>
      {loading ? (
        <LoadingSpinner />
      ) : (
        pokemons.map((pokemon: string) => {
          return (
            <ListItem
              key={pokemon}
              onClick={() => handleAddToComparision(id, pokemon)}
            >
              <Text>{pokemon}</Text>
            </ListItem>
          );
        })
      )}
    </List>
  );
};

const List = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  jusitify-content: flex-start;
  align-items: start;
  padding: 10px;
  position: relative;
`;

const ListItem = styled.div`
  width: 100%;
  padding: 5px;
`;
