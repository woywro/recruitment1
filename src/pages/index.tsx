import { client } from '../../apollo-client';
import { gql } from '@apollo/client';

export default function Home({ pokemons }) {
  console.log(pokemons);
  return <div>strona</div>;
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
