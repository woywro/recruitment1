import { ApolloServer, gql } from 'apollo-server-micro';
import { client } from '../../../apollo-client';

const typeDefs = gql`
  type Query {
    fight(pokemon: String): [Fight!]!
  }
  type Fight {
    name: String
  }
`;

const resolvers = {
  Query: {
    fight: async (pokemon) => {
      console.log(pokemon);
      const fetchedPokemon1 = await client.query({
        query: gql`
          {
            getFuzzyPokemon(pokemon: "bulbasaur") {
              species
              baseStatsTotal
            }
          }
        `,
      });
      return [{ name: fetchedPokemon1.data.getFuzzyPokemon[0].baseStatsTotal }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
