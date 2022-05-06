import { client } from '../../apollo-client';
import { gql } from '@apollo/client';
import { CompareView } from '../views/CompareView';

export default function Compare({ pokemons }) {
  return <CompareView pokemons={pokemons} />;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        getAllPokemonSpecies
      }
    `,
  });

  return {
    props: {
      pokemons: data.getAllPokemonSpecies,
    },
  };
}
