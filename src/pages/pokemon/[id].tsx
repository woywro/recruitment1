import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';
import { PokemonView } from '../../views/PokemonView';

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
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
}
