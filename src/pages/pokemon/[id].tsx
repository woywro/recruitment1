import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';
import { PokemonView } from '../../views/PokemonView';
import { pokemonSpeciesFormatter } from '../../utils/pokemonSpeciesFormatter';
import { PokemonInterface } from '../../types/PokemonInterface';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {
  pokemon: PokemonInterface;
}

export default function Pokemon({ pokemon }: Props) {
  return pokemon !== undefined && <PokemonView pokemon={pokemon} />;
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
    return { params: { id: e !== undefined ? e : '404' } };
  });
  // console.log(all);

  return {
    paths: all,
    fallback: false,
  };
}
export const getStaticProps = async (context) => {
  const species = context.params.id.toString();
  try {
    const { data } = await client.query({
      query: gql`
      {
        getPokemon(pokemon: ${species}) {
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
