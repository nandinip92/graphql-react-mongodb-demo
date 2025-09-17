import React, { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { CREATE_USER} from '../graphql/muations';
import {GET_ALL_USERS } from '../graphql/queries';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    refetchQueries: [GET_ALL_USERS],
  });

  const handleSubmit = e => {
    e.preventDefault();
    createUser({ variables: { name, age: parseInt(age) } });
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
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
