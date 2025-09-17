import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql", // <-- your GraphQL server
  }),
  cache: new InMemoryCache(), // Cache GraphQL query results— stores query results locally for faster rendering.
});

export default client;
