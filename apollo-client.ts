import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache: cache,
  uri: process.env.NEXT_PUBLIC_GRAPHPOKEMON,

  name: 'graphql-pokemon-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
