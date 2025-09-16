// const { ApolloServer } = require("@apollo/server");
// const { expressMiddleware } = require("@apollo/server/express4");
// const bodyParser = require("body-parser");
// const cors = require("cors");

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectToDatabase = require("./database/connect");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

async function startServer() {
  const app = express();

  //Apollo Server setup
  const server = new ApolloServer({ typeDefs, resolvers });

  // Apollo needs to start internally (build schema, initialize plugins, etc.) before you attach it to Express.
  await server.start();

  // Mount Apollo middleware on Express at `/graphql` endpoint
  server.applyMiddleware({ app });
  //app.use(`graphql`, cors(), bodyParser.json(), expressMiddleware(server));
  // Connect to MongoDB
  await connectToDatabase();

  // Start Express app
  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
}

startServer();
