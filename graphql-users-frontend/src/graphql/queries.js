import { gql } from '@apollo/client';

// Query to fetch all users
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      age
    }
  }
`;