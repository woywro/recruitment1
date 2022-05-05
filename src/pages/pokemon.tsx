import { client } from '../../apollo-client';
import { gql } from '@apollo/client';

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
  return <div>strona</div>;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        getPokemon(pokemon: dragonite) {
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
