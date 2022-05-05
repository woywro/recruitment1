import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';

export default function Pokemon({ pokemon }) {
  return pokemon !== undefined && <div>{pokemon.species}</div>;
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      {
        getAllPokemonSpecies
      }
    `,
  });
  return {
    paths: data.getAllPokemonSpecies.map((species) => ({
      params: { id: species },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const species = context.params.id.toString();
  const { data } = await client.query({
    query: gql`
      {
        getPokemon(pokemon: ${species}) {
          sprite
          num
          species
          color
        }
      }
    `,
  });

  return {
    props: {
      pokemon: data.getPokemon,
    },
  };
}
