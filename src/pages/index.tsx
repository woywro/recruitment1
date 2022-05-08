import { client } from '../../apollo-client';
import { gql } from '@apollo/client';
import { HomeView } from '../views/HomeView';

interface Props {
  pokemons: string[];
}

export default function Home({ pokemons }: Props) {
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
        pokemons: [...new Set(data.getAllPokemonSpecies)],
      },
    };
  } catch (err) {
    console.log(err);
  }
}
