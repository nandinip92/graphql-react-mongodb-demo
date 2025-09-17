import React from 'react';
import { useQuery } from '@apollo/client/react'; //A React hook provided by Apollo Client that lets you run a GraphQL query directly inside a React component.
import { GET_ALL_USERS } from '../graphql/queries'; // A GraphQL query we’ve defined in queries.js

const UserList = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {data.getAllUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
