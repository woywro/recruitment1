import { gql } from '@apollo/client';
import Head from 'next/head';
import { client } from '../../apollo-client';
import { CompareView } from '../views/CompareView';

interface Props {
  pokemons: string[];
}

export default function Compare({ pokemons }: Props) {
  return (
    <>
      <Head>
        <title>Pokemons- Compare</title>
      </Head>
      <CompareView pokemons={pokemons} />{' '}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        getAllPokemonSpecies
      }
    `,
  });
  const allPokemonSpecies: string[] = data.getAllPokemonSpecies.map(
    (species: string) => {
      return species;
    }
  );

  return {
    props: {
      pokemons: [...new Set(allPokemonSpecies)],
    },
  };
}
