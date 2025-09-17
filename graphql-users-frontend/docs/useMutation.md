# `useMutation` - CreateUser.js

Following is the code we used in the [`src/componenets/CreateUser.js`](../src/componenets/CreateUser.js)

```javascript
import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../graphql/muations";
import { GET_ALL_USERS } from "../graphql/queries";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    refetchQueries: [GET_ALL_USERS],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ variables: { name, age: parseInt(age) } });
    setName("");
    setAge("");
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Create User</button>
      </form>
      {loading && <p>Creating user...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default CreateUser;
```

## Lets breakdown whats happening here

### Imports

```javascript
import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../graphql/muations";
import { GET_ALL_USERS } from "../graphql/queries";
```

- **`useMutation`**: Apollo hook for running GraphQL mutations from React.

- - **`CREATE_USER`:** A GraphQL query we’ve defined in [`../src/graphql/muations.js`](../src/graphql/muations.js)

### Setting up the Mutation

```javascript
const [createUser, { loading, error }] = useMutation(CREATE_USER, {
  refetchQueries: [GET_ALL_USERS],
});
```

**_Here’s the Apollo part:_**

1. **`useMutation(CREATE_USER)`** returns a tuple:

   - `createUser` → A function you call when you want to run the mutation.

   - `{ loading, error }` → Mutation state:

     - loading = true while request is running.

     - error holds details if the mutation fails.

2. **`refetchQueries: [GET_ALL_USERS]`**

   - After a user is created, Apollo will automatically refetch the `GET_ALL_USERS` query.

   - This keeps your UI updated with the new user list, instead of you manually updating the cache.

### Handling Form Submission

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  createUser({ variables: { name, age: parseInt(age) } });
  setName("");
  setAge("");
};
```

- Prevents default form submission.

- Calls `createUser(...)` with mutation variables (name, age).

- Resets input fields after submission.

### Rendering

```javascript
{
  loading && <p>Creating user...</p>;
}
{
  error && <p>Error: {error.message}</p>;
}
```

Displays status from Apollo mutation:

- Shows “Creating user...” while request is in progress.

- Shows an error message if something goes wrong.

## 🔑 Apollo Client Bits Summary

- `useMutation` hook → lets you run mutations inside React.

- Mutation function (`createUser`) → call this with variables to execute.

- Mutation state (`loading`, `error`) → track status easily.

- `refetchQueries` → auto-refresh relevant queries (like `GET_ALL_USERS`) so the UI stays in sync with the server.

**Resource links:**

https://www.apollographql.com/docs/react/data/mutations
