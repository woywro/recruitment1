import { useCallback, useState } from 'react';
import { ErrorMessage } from '../../../../components/ErrorMessage';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import { Text } from '../../../../components/Text';
import { ComparedPokemonInterface } from '../../../../types/PokemonInterface';
import { pokemonSpeciesFormatter } from '../../../../utils/pokemonSpeciesFormatter';
import { List, ListItem, Wrapper } from './style';

interface Props {
  pokemons: string[];
  comparedPokemons: ComparedPokemonInterface[];
  setComparedPokemons: (arg0: ComparedPokemonInterface[]) => void;
  getPokemonDetails: any;
}

export const PokemonChoiceCard = ({
  pokemons,
  comparedPokemons,
  setComparedPokemons,
  getPokemonDetails,
}: Props) => {
  const [getPokemon, { error, loading }] = getPokemonDetails;

  const handleAddToComparision = useCallback(
    (pokemon: string) => {
      const comparedPokemonsSpecies = comparedPokemons.map((e) => {
        return e.species;
      });
      if (comparedPokemonsSpecies.includes(pokemon)) {
        alert('This pokemon is already on the list!');
      } else {
        getPokemon({
          variables: { pokemon: pokemonSpeciesFormatter(pokemon) },
        }).then((res) => {
          setComparedPokemons([
            ...comparedPokemons,
            { highestValues: [], ...res.data.getPokemon },
          ]);
        });
      }
    },
    [comparedPokemons, setComparedPokemons, getPokemon]
  );

  return (
    <Wrapper>
      <Text bold={true} style={{ padding: '10px' }}>
        Choose from list
      </Text>
      <List>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage msg={'An error occured!'} />
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
