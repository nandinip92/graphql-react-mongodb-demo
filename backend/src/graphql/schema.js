//`graphql-tag` is a utility package that allows you to define GraphQL schemas and queries using template literals.
// `gql` is a tagged template literal function:

const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Query {
    getAllUsers: [User!]!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`;

module.exports = typeDefs;
