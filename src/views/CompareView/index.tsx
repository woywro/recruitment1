import { useLazyQuery } from '@apollo/react-hooks';
import type { Query } from '@favware/graphql-pokemon';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PokemonCard } from './components/PokemonCard';

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
    { id: 1, item: null, highestValues: null },
  ]);

  const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON_DETAILS);

  //   const getHighestValues = (comparisionCards) => {
  //     const r = comparisionCards.map((card) => {
  //       if (card.item !== null) {
  //         return card.item.baseStats;
  //       }
  //     });
  //     const final = {
  //       hp: Math.max(...r.map((x) => x.hp)),
  //       attack: Math.max(...r.map((x) => x.attack)),
  //       defense: Math.max(...r.map((x) => x.defense)),
  //     };
  //     console.log(final);
  //   };

  //   const highlightHighestValues = () => {
  //     const cardsToGetValuesFrom = [];
  //     comparisionCards.map((card) => {
  //       if (card.item !== null) {
  //         cardsToGetValuesFrom.push(Object.entries({ ...card.item.baseStats }));
  //       }
  //     });
  //     console.log(cardsToGetValuesFrom);
  //     for (let i = 0; i < cardsToGetValuesFrom.length; i++) {
  //       // if(comparisionCards[i].item.)
  //     }
  //   };

  //   useEffect(() => {
  //     getHighestValues(comparisionCards);
  //     highlightHighestValues();
  //   }, [comparisionCards]);

  const handleAdd = () => {
    setComparisionCards([
      ...comparisionCards,
      {
        id: Math.round(Math.random() * 10000),
        item: null,
        highestValues: null,
      },
    ]);
  };

  return (
    <>
      <CompareWrapper>
        {comparisionCards.map((comparisionCard) => {
          return (
            <PokemonCard
              key={comparisionCard.id}
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
