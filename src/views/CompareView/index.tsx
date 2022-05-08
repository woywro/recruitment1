import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import { ScrollSync } from 'react-scroll-sync';
import styled from 'styled-components';
import {
  PokemonInterface,
  ComparedPokemonInterface,
} from '../../types/PokemonInterface';
import { getHighestStats } from '../../utils/getHighestStats';
import { PokemonChoiceCard } from './components/PokemonChoiceCard';
import { PokemonDataCard } from './components/PokemonDataCard';

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
    ComparedPokemonInterface[] | []
  >([]);
  const [comparedPokemonsList, setComparedPokemonsList] = useState<
    ComparedPokemonInterface[] | []
  >([]);

  const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON_DETAILS);

  const highlightStats = () => {
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
  };

  useEffect(() => {
    highlightStats();
  }, [comparedPokemons]);

  return (
    <>
      <CompareWrapper>
        {comparedPokemonsList.length !== 0 && (
          <ScrollSync>
            <>
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
            </>
          </ScrollSync>
        )}
        <PokemonChoiceCard
          pokemons={pokemons}
          comparedPokemons={comparedPokemons}
          setComparedPokemons={setComparedPokemons}
          getPokemon={getPokemon}
        />
      </CompareWrapper>
    </>
  );
};

const CompareWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  padding: 20px;
`;

const AddSlotButton = styled.div`
  width: 200px;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  padding: 5px;
  background: white;
  margin: 10px;
  border-radius: 20px;
  flex: 0 0 auto;
  cursor: pointer;
  border: none;
  font-size: 24px;
  font-weight: bold;
`;
