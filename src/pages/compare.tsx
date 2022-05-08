import { client } from '../../apollo-client';
import { gql } from '@apollo/client';
import { CompareView } from '../views/CompareView';

interface Props {
  pokemons: string[];
}

export default function Compare({ pokemons }: Props) {
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
  const allPokemonSpecies: string[] = data.getAllPokemonSpecies;

  return {
    props: {
      pokemons: [...new Set(allPokemonSpecies)],
    },
  };
}
