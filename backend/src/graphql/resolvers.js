// Import the UserModel we created with Mongoose
// This model represents the "users" collection in MongoDB
const UserModel = require('../models/user.model');

// Define resolvers for the GraphQL schema
const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await UserModel.find(); // returns an array of users
    },
  },

  Mutation: {
    createUser: async (_, { name, age }) => {
      const newUser = new UserModel({ name, age });

      return await newUser.save(); //Save the new user to MongoDB and return the saved document
    },
  },
};

// Export resolvers so Apollo Server can use them with the schema (typeDefs)
module.exports = resolvers;