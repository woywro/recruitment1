import { useQuery } from '@apollo/react-hooks';
import type { Query } from '@favware/graphql-pokemon';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import { client } from '../../../apollo-client';
import { Wrapper } from '../style';
import { SpriteElement } from './components/SpriteElement';

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
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

export const SpritesView = ({ pokemonSpecies }) => {
  const { loading, error, data } = useQuery<
    GraphQLPokemonResponse<'getPokemon'>
  >(GET_POKEMON_DETAILS, {
    client: client,
    variables: { pokemon: pokemonSpecies },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Wrapper>
      <SpritesWrapper>
        <SpriteElement sprite={data.getPokemon.sprite} />
        <SpriteElement sprite={data.getPokemon.shinySprite} />
        <SpriteElement sprite={data.getPokemon.backSprite} />
        <SpriteElement sprite={data.getPokemon.shinyBackSprite} />
      </SpritesWrapper>
    </Wrapper>
  );
};

const SpritesWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
