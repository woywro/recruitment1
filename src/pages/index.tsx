import { client } from '../../apollo-client';
import { gql } from '@apollo/client';
import { HomeView } from '../views/HomeView';

export default function Home({ pokemons }) {
  return <HomeView pokemons={pokemons} />;
}

export async function getStaticProps() {
  try {
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
  } catch (err) {
    console.log(err);
  }
}
