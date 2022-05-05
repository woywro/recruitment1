import { client } from '../../apollo-client';
import { gql } from '@apollo/client';

export default function Home() {
  return <div>strona</div>;
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
 };
}