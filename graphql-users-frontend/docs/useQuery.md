# `useQuery` - UserList.js

Following is the code in [`src/components/UserList.js`](../src/components/UserList.js)

```javascript
import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_USERS } from "../graphql";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {data.getAllUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

## Lets breakdown whats happening here

### Imports

```javascript
import { useQuery } from "'@apollo/client/react'";
import { GET_ALL_USERS } from "../graphql";
```

- **`useQuery`:** A React hook provided by Apollo Client that lets you run a GraphQL query directly inside a React component.

- **`GET_ALL_USERS`:** A GraphQL query we’ve defined in [`../src/graphql/queries.js`](../src/graphql/queries.js)

### Running Query

```javascript
const { loading, error, data } = useQuery(GET_ALL_USERS);
```

**Here’s where Apollo magic happens:**

- `useQuery(GET_ALL_USERS)` → Sends the GraphQL query to your backend (using the Apollo client you configured earlier).

- Apollo automatically:

  - Tracks loading state while waiting for the server’s response.

  - Captures any error if the request fails.

  - Stores the data once the server responds.

👉 That’s why you can destructure { loading, error, data } directly.

### Handling Query States

```javascript
if (loading) return <p>Loading users...</p>;
if (error) return <p>Error: {error.message}</p>;
```

- While the request is in progress, Apollo sets `loading = true`.

- If something goes wrong (network error, GraphQL error), Apollo populates `error`.

- This is how you can provide instant feedback to the user.

### Rendering Data

```javascript
<ul>
  {data.getAllUsers.map((user) => (
    <li key={user.id}>
      {user.name} - {user.age} years old
    </li>
  ))}
</ul>
```

- Once data is available, you access it with `data.getAllUsers`.

- That’s the array returned by your GraphQL query.

- React maps over it to render each user.

**_NOTE:_**

```javascript
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      age
    }
  }
`;
```

- `query GetAllUsers` → This is the operation name. It’s mainly for debugging and tooling (Apollo DevTools, caching, error messages). It doesn’t dictate the shape of the response.

- getAllUsers → This is the actual field name in your GraphQL schema. Which we defined in [`../../backend/src/graphql/schema.js`](../../backend/src/graphql/schema.js)

Your backend schema probably looks like:

```graphql
type Query {
  getAllUsers: [User!]!
}
```

## 🔑 Apollo Client Bits Summary

- `useQuery` hook → Runs a GraphQL query inside React.

- Apollo manages states → You just read `{ loading, error, data }`.

- Query defined with gql → You import queries like GET_ALL_USERS and pass them into useQuery.

- ApolloProvider (set up in your root `index.js`) → Makes this all work by providing the configured client to every component.

**Resource Links**

https://www.apollographql.com/docs/react/data/queries
