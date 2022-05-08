import { useLazyQuery } from '@apollo/react-hooks';
import type { Query } from '@favware/graphql-pokemon';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonCard } from './components/PokemonCard';
import { getHighestStats } from '../../utils/getHighestStats';
import { PokemonChoiceCard } from './components/PokemonChoiceCard';
import { PokemonDataCard } from './components/PokemonDataCard';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import { PokemonInterface } from '../../types/PokemonInterface';

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

export const CompareView = ({ pokemons }) => {
  const [comparedPokemons, setComparedPokemons] = useState([]);
  const [comparedPokemonsList, setComparedPokemonsList] = useState([]);
  const [comparisionListCard, setComparisionListCard] = useState([]);
  // const [highestStats, setHighestStats] = useState([]);

  const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON_DETAILS);

  const highlightStats = () => {
    const res = getHighestStats(comparedPokemons);
    // setHighestStats(res);
    const comparedPokemonsDeepCopy = JSON.parse(
      JSON.stringify(comparedPokemons)
    );
    comparedPokemonsDeepCopy.map((pokemon) => {
      pokemon.highestValues = [];
      for (let i = 0; i < Object.values(pokemon.baseStats).length; i++) {
        if (Object.values(pokemon.baseStats)[i] == Object.values(res)[i]) {
          pokemon.highestValues.push(Object.keys(pokemon.baseStats)[i]);
        }
      }
    });
    setComparedPokemonsList(comparedPokemonsDeepCopy);
    console.log(comparedPokemonsDeepCopy);
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
              {comparedPokemonsList.map((comparedPokemon: PokemonInterface) => {
                return (
                  <PokemonDataCard
                    key={comparedPokemon.species}
                    item={comparedPokemon}
                    comparedPokemons={comparedPokemons}
                    setComparedPokemons={setComparedPokemons}
                  />
                );
              })}
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
