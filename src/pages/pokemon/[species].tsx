import { gql } from '@apollo/client';
import Head from 'next/head';
import { client } from '../../../apollo-client';
import { PokemonInterface } from '../../types/PokemonInterface';
import { pokemonSpeciesFormatter } from '../../utils/pokemonSpeciesFormatter';
import { PokemonView } from '../../views/PokemonView';

interface Props {
  pokemon: PokemonInterface;
}

export default function Pokemon({ pokemon }: Props) {
  return (
    <>
      <Head>
        <title>Pokemons- {pokemonSpeciesFormatter(pokemon.species)}</title>
      </Head>
      {pokemon !== undefined && <PokemonView pokemon={pokemon} />}
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      {
        getAllPokemonSpecies
      }
    `,
  });
  const paths = data.getAllPokemonSpecies.map((species: string) => {
    return pokemonSpeciesFormatter(species);
  });
  const all = paths.map((e: string) => {
    return { params: { species: e !== undefined ? e : '404' } };
  });
  return {
    paths: all,
    fallback: false,
  };
}
export const getStaticProps = async ({
  params: { species },
}: {
  params: { species: string };
}) => {
  const pokemonSpecies = species.toString();
  try {
    const { data } = await client.query({
      query: gql`
      {
        getPokemon(pokemon: ${pokemonSpecies}) {
          sprite
          num
          species
          color
          abilities { first second hidden }
		      baseStats { hp attack defense specialattack specialdefense speed }
		      gender { male female }
		      height
		      weight
        }
      }
    `,
    });

    return {
      props: {
        pokemon: data.getPokemon,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
