import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollSync } from 'react-scroll-sync';
import { ComparedPokemonInterface } from '../../types/PokemonInterface';
import { getHighestStats } from '../../utils/getHighestStats';
import { Wrapper } from '../style';
import { PokemonChoiceCard } from './components/PokemonChoiceCard';
import { CompareWrapper, List } from './style';

const GET_POKEMON_DETAILS = gql`
  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      num
      species
      types
      abilities {
        first
        second
        hidden
      }
      baseStats {
        hp
        attack
        defense
        specialattack
        specialdefense
        speed
      }
      gender {
        male
        female
      }
      height
      weight
      sprite
      shinySprite
      backSprite
      shinyBackSprite
    }
  }
`;

interface Props {
  pokemons: string[];
}

export const CompareView = ({ pokemons }: Props) => {
  const [comparedPokemons, setComparedPokemons] = useState<
    ComparedPokemonInterface[]
  >([]);
  const [comparedPokemonsList, setComparedPokemonsList] = useState<
    ComparedPokemonInterface[]
  >([]);

  const PokemonDataCard = dynamic(() =>
    import('./components/PokemonDataCard').then(
      (mod) => mod.PokemonDataCard as any
    )
  );

  const [getPokemon] = useLazyQuery(GET_POKEMON_DETAILS);

  const highlightStats = useCallback(() => {
    const highestStats = getHighestStats(comparedPokemons);
    const comparedPokemonsDeepCopy: ComparedPokemonInterface[] = JSON.parse(
      JSON.stringify(comparedPokemons)
    );
    comparedPokemonsDeepCopy.map((pokemon: ComparedPokemonInterface) => {
      pokemon.highestValues = [];
      for (let i = 0; i < Object.values(pokemon.baseStats).length; i++) {
        if (
          Object.values(pokemon.baseStats)[i] == Object.values(highestStats)[i]
        ) {
          pokemon.highestValues.push(Object.keys(pokemon.baseStats)[i]);
        }
      }
    });
    setComparedPokemonsList(comparedPokemonsDeepCopy);
  }, [comparedPokemons]);

  useEffect(() => {
    highlightStats();
  }, [comparedPokemons]);

  return (
    <Wrapper>
      <CompareWrapper>
        {comparedPokemonsList.length !== 0 && (
          <ScrollSync>
            <List>
              {comparedPokemonsList.map(
                (comparedPokemon: ComparedPokemonInterface) => {
                  return (
                    <PokemonDataCard
                      key={comparedPokemon.species}
                      comparedPokemon={comparedPokemon}
                      comparedPokemons={comparedPokemons}
                      setComparedPokemons={setComparedPokemons}
                    />
                  );
                }
              )}
            </List>
          </ScrollSync>
        )}
        <PokemonChoiceCard
          pokemons={pokemons}
          comparedPokemons={comparedPokemons}
          setComparedPokemons={setComparedPokemons}
          getPokemon={getPokemon}
        />
      </CompareWrapper>
    </Wrapper>
  );
};
