# Creating Apollo Client instance

Following is the code for creating client instance.

```javascript
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql", // <-- your GraphQL server
  }),
  cache: new InMemoryCache(),
});

export default client;
```

## Lets breakdown whats happening here

### 1. Imports

```javascript
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
```

- ApolloClient → the main class that manages all GraphQL operations (queries, mutations, caching, etc.).

- InMemoryCache → a built-in caching solution to store results of queries in memory for fast access.

- HttpLink → tells Apollo how to connect to your GraphQL server via HTTP.

### 2. Creating the Apollo Client instance

```javascript
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});
```

- **_`new ApolloClient({...})`_** creates a single instance of the client that you can use across your React app.

- **`link: new HttpLink({...})`**

  - `HttpLink` is how the client sends requests to your GraphQL server.

  - `uri` specifies the endpoint of your server. For example- `http://localhost:4000/graphql`

  - Every query or mutation from your app will be sent to this URL.

- **`cache: new InMemoryCache()`**

  - `InMemoryCache` stores query results in memory so that if the same query is executed again, Apollo can return cached data instantly.

  - This improves performance and reduces unnecessary network requests.

  - The cache also enables advanced features like optimistic updates and cache reads/writes.

#### 3. Exporting the client

```javascript
export default client;
```

This allows other parts of your app (like index.js) to import the Apollo Client instance:

```javascript
import client from "./apollo/apolloClient";
```

Then you wrap your React app with ApolloProvider to make it available in all components.


## Summary

✅ Summary

This code does three things:

1. Connects your React app to the GraphQL server (HttpLink with uri).

2. Provides caching for queries (InMemoryCache).

3. Creates a reusable Apollo Client instance (ApolloClient) that you can use throughout your app.