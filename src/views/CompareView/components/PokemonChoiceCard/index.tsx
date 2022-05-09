import { useState } from 'react';
import styled from 'styled-components';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import { Text } from '../../../../components/Text';
import { hoverEffectBg } from '../../../../mixins/hoverEffects';
import { ComparedPokemonInterface } from '../../../../types/PokemonInterface';
import { pokemonSpeciesFormatter } from '../../../../utils/pokemonSpeciesFormatter';

interface Props {
  pokemons: string[];
  comparedPokemons: ComparedPokemonInterface[];
  setComparedPokemons: (arg0: ComparedPokemonInterface[]) => void;
  getPokemon: any;
}

export const PokemonChoiceCard = ({
  pokemons,
  comparedPokemons,
  setComparedPokemons,
  getPokemon,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const handleAddToComparision = (pokemon: string) => {
    const comparedPokemonsSpecies = comparedPokemons.map((e) => {
      return e.species;
    });
    if (comparedPokemonsSpecies.includes(pokemon)) {
      alert('This pokemon is already on the list!');
    } else {
      setLoading(true);
      getPokemon({
        variables: { pokemon: pokemonSpeciesFormatter(pokemon) },
      }).then((res) => {
        setComparedPokemons([
          ...comparedPokemons,
          { highestValues: [], ...res.data.getPokemon },
        ]);
        setLoading(false);
      });
    }
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
  min-width: 250px;
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
