import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { client } from '../../../apollo-client';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { SpriteElement } from './components/SpriteElement';
import { SpritesWrapper } from './style';

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
    <>
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
    </>
  );
};
