import { gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../../apollo-client';
import { pokemonSpeciesFormatter } from '../../../utils/pokemonSpeciesFormatter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pokemons: string = req.query.pokemons as unknown as string;
  if (pokemons.indexOf('_') == -1) {
    throw new Error('You have to provide second species');
  }
  const splitPokemons: string[] = pokemons.split('_');

  const pokemon1 = pokemonSpeciesFormatter(splitPokemons[0]);
  const pokemon2 = pokemonSpeciesFormatter(splitPokemons[1]);

  const getPokemon = gql`
    query ($pokemon: String!) {
      getFuzzyPokemon(pokemon: $pokemon) {
        species
        baseStats {
          attack
        }
      }
    }
  `;

  const pokemon1Query = await client.query({
    query: getPokemon,
    variables: {
      pokemon: pokemon1,
    },
  });

  const pokemon2Query = await client.query({
    query: getPokemon,
    variables: {
      pokemon: pokemon2,
    },
  });

  const fetchedPokemon1 = pokemon1Query.data.getFuzzyPokemon[0];
  const fetchedPokemon2 = pokemon2Query.data.getFuzzyPokemon[0];

  const chooseWinner = () => {
    if (fetchedPokemon1.baseStats.attack > fetchedPokemon2.baseStats.attack) {
      return pokemon1;
    } else if (
      fetchedPokemon1.baseStats.attack < fetchedPokemon2.baseStats.attack
    ) {
      return pokemon2;
    } else {
      return splitPokemons[Math.round(Math.random() * 2)];
    }
  };
  const winner = chooseWinner();

  res.end(
    `${fetchedPokemon1.species} vs ${fetchedPokemon2.species} winner: ${winner}`
  );
}
