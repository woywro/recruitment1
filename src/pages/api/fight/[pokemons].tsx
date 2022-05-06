import { client } from '../../../../apollo-client';
import { gql } from '@apollo/client';
export default async function handler(req, res) {
  const { pokemons } = req.query;
  const splitPokemons = pokemons.split('_');
  const pokemon1 = splitPokemons[0];
  const pokemon2 = splitPokemons[1];
  console.log(pokemon1);
  console.log(pokemon2);

  const fetchedPokemon1 = await client.query({
    query: gql`
      query ($pokemon: PokemonEnum!) {
        getFuzzyPokemon(pokemon: $pokemon) {
          species
          baseStatsTotal
        }
      }
    `,
  });
  const fetchedPokemon2 = await client.query({
    query: gql`
      {
        getFuzzyPokemon(pokemon: "dragonite") {
          species
          baseStatsTotal
        }
      }
    `,
  });

  const pokemon1Stats = fetchedPokemon1.data.getFuzzyPokemon[0].baseStatsTotal;
  const pokemon2Stats = fetchedPokemon2.data.getFuzzyPokemon[0].baseStatsTotal;
  const chooseWinner = () => {
    if (pokemon1Stats > pokemon2Stats) {
      return pokemon1;
    } else if (pokemon1Stats < pokemon2Stats) {
      return pokemon2;
    } else {
      return pokemon1;
    }
  };
  console.log(pokemon1Stats);
  console.log(pokemon2Stats);
  //   console.log(chooseWinner());

  res.end(`winner: ddd`);
}
// [
//     {
//       __typename: 'Pokemon',
//       species: 'dragonite',
//       baseStats: {
//         __typename: 'Stats',
//         hp: 91,
//         attack: 134,
//         defense: 95,
//         specialattack: 100,
//         specialdefense: 100,
//         speed: 80
//       }
//     }
//   ]
