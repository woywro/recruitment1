import { useQuery } from '@apollo/react-hooks';
import type { Query } from '@favware/graphql-pokemon';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import { client } from '../../../apollo-client';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { SpriteElement } from './components/SpriteElement';
import { Wrapper } from '../style';

interface Props {
  pokemonSpecies: string;
}

const GET_POKEMON_DETAILS = gql`
  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      sprite
      shinySprite
      backSprite
      shinyBackSprite
    }
  }
`;

export const SpritesView = ({ pokemonSpecies }: Props) => {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    client: client,
    variables: { pokemon: pokemonSpecies },
  });

  if (loading) return <LoadingSpinner />;

  return (
    <Wrapper>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage msg={'An error occured!'} />
      ) : (
        <SpritesWrapper>
          <SpriteElement sprite={data.getPokemon.sprite} />
          <SpriteElement sprite={data.getPokemon.shinySprite} />
          <SpriteElement sprite={data.getPokemon.backSprite} />
          <SpriteElement sprite={data.getPokemon.shinyBackSprite} />
        </SpritesWrapper>
      )}
    </Wrapper>
  );
};

const SpritesWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

// const Wrapper = styled.div`
//   display: flex;
//   flex-flow: column;
//   justify-content: center;
//   align-items: center;
// `;
