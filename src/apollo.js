import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.16.90:8000/api/solicitudes', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
