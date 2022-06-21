import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o83gl2119701xr0b5m4ly6/master',
  cache: new InMemoryCache()
});