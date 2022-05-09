import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import { Text } from '../../../../components/Text';
import { hoverEffectBg } from '../../../../mixins/hoverEffects';
import {
  ComparedPokemonInterface,
  PokemonInterface,
} from '../../../../types/PokemonInterface';
import { pokemonSpeciesFormatter } from '../../../../utils/pokemonSpeciesFormatter';
import { Wrapper, List, ListItem } from './style';

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
