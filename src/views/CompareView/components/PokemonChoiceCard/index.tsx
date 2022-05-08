import { useState } from 'react';
import styled from 'styled-components';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import { Text } from '../../../../components/Text';
import { hoverEffectBg } from '../../../../mixins/hoverEffects';
import { getHighestStats } from '../../../../utils/getHighestStats';
import { pokemonSpeciesFormatter } from '../../../../utils/pokemonSpeciesFormatter';

export const PokemonChoiceCard = ({
  pokemons,
  comparedPokemons,
  setComparedPokemons,
  getPokemon,
}) => {
  const [loading, setLoading] = useState(false);

  const handleAddToComparision = (pokemon) => {
    setLoading(true);
    getPokemon({
      variables: { pokemon: pokemonSpeciesFormatter(pokemon) },
    }).then((res) => {
      setComparedPokemons([
        ...comparedPokemons,
        { highestValues: [], ...res.data.getPokemon },
      ]);
      setLoading(false);
      console.log(res.data.getPokemon);
    });
  };

  return (
    <Wrapper>
      <Text bold={true}>Choose from list</Text>
      <List>
        {loading ? (
          <LoadingSpinner />
        ) : (
          pokemons.map((pokemon: string) => {
            return (
              <ListItem
                key={pokemon}
                onClick={() => handleAddToComparision(pokemon)}
              >
                <Text>{pokemon}</Text>
              </ListItem>
            );
          })
        )}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  position: relative;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding: 5px;
  background: white;
  margin: 10px;
  border-radius: 20px;
  flex: 0 0 auto;
`;

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
  cursor: pointer;
  :hover {
    ${hoverEffectBg}
  }
`;
