import { useLazyQuery } from '@apollo/react-hooks';
import type { Query } from '@favware/graphql-pokemon';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { PokemonCard } from './components/PokemonCard';
import { PokemonChoiceCard } from './components/PokemonChoiceCard';
import { PokemonDataCard } from './components/PokemonDataCard';

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

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
  const [comparisionCards, setComparisionCards] = useState([
    { id: 1, item: null },
  ]);
  const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON_DETAILS);

  const handleAdd = () => {
    setComparisionCards([
      ...comparisionCards,
      { id: Math.round(Math.random() * 10000), item: null },
    ]);
  };

  return (
    <>
      <CompareWrapper>
        {comparisionCards.map((comparisionCard) => {
          return (
            <PokemonCard
              setComparisionCards={setComparisionCards}
              comparisionCards={comparisionCards}
              getPokemon={getPokemon}
              comparisionCard={comparisionCard}
              pokemons={pokemons}
            />
          );
        })}
        <AddSlotButton onClick={handleAdd}>Add +</AddSlotButton>
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

const List = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  jusitify-content: flex-start;
  align-items: start;
  padding: 10px;
`;

const ComparisionList = styled.div`
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

const Slot = styled.div`
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
