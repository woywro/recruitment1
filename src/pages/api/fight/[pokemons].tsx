import { client } from '../../../../apollo-client';
import { gql } from '@apollo/client';
import { pokemonSpeciesFormatter } from '../../../utils/pokemonSpeciesFormatter';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pokemons: any = req.query.pokemons;
  const splitPokemons: string[] = pokemons.split('_');
  const pokemon1 = pokemonSpeciesFormatter(splitPokemons[0]);
  const pokemon2 = pokemonSpeciesFormatter(splitPokemons[1]);

  const getPokemon = gql`
    query ($pokemon: String!) {
      getFuzzyPokemon(pokemon: $pokemon) {
        species
        baseStatsTotal
      }
    }
  `;

  const fetchedPokemon1 = await client.query({
    query: getPokemon,
    variables: {
      pokemon: pokemon1,
    },
  });

  const fetchedPokemon2 = await client.query({
    query: getPokemon,
    variables: {
      pokemon: pokemon2,
    },
  });

  const pokemon1Stats = fetchedPokemon1.data.getFuzzyPokemon[0].baseStatsTotal;
  const pokemon2Stats = fetchedPokemon2.data.getFuzzyPokemon[0].baseStatsTotal;

  const chooseWinner = () => {
    if (pokemon1Stats > pokemon2Stats) {
      return pokemon1;
    } else if (pokemon1Stats < pokemon2Stats) {
      return pokemon2;
    } else {
      return splitPokemons[Math.round(Math.random() * splitPokemons.length)];
    }
  };
  const winner = chooseWinner();

  res.end(`winner: ${winner}`);
}
