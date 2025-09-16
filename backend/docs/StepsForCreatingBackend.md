# Steps To create a GraphQL backen with MongoDB

Following are the steps I used to create this backend (GraphQL+MongoDB).

## Step-1

Create `docker-compose.yml` with mongodb service.

**👉 Checkout [`docker-compose.yml`](/backend/docker-compose.yml)**

```script
docker-compose up --build
```

After building then run

```script
docker-compose up

```

## Step -2 Setting up the project

```script
npm init -y
```

Next, install necessary dependencies

```script
npm install express graphql graphql-tools @apollo/server mongodb mongoose body-parser cors

npm install express graphql graphql-tools @apollo/server mongodb mongoose body-parser cors

```

## Step -3 Packages being installed

`express`

- A popular web framework for Node.js.
- Helps you create a server that can handle HTTP requests and responses.

`graphql`

- The core GraphQL library.
- Lets you define schemas, types, queries, and mutations for your GraphQL API.

`graphql-tools`

- Utility library to help build and manipulate GraphQL schemas.
- Makes it easier to merge schemas, define resolvers, and use schema stitching.

`@apollo/server`

- The core Apollo Server package (Apollo Server 4).
- Handles GraphQL queries and mutations, and executes your schema + resolvers.

`mongodb`

- The official MongoDB Node.js driver.
- Lets your Node.js app connect directly to a MongoDB database and perform CRUD operations.

`mongoose`

- An Object Data Modeling (ODM) library for MongoDB.
- Provides schema-based modeling, validation, and easier interaction with MongoDB.
- Think of it as a “higher-level abstraction” on top of the MongoDB driver.

  - mongodb → raw driver, you control everything, less abstraction.

  - mongoose → middleman library that helps you work with MongoDB using JavaScript objects instead of raw commands. It adds schemas, validation, and models.

`body-parser`

- Middleware for Express that parses incoming request bodies.
- Used here to parse JSON requests before Apollo Server processes them.

`cors`

- Middleware to enable Cross-Origin Resource Sharing.
- Allows your frontend app (running on a different port, like React on http://localhost:3000) to make requests to your backend (http://localhost:4000).

### Step- 4 Connecting to MongoDB

**👉 Checkout [`src/database/connect.js`](/backend/src/database/connect.js)**

**👉 checkout [`ConnectingToMongoDbB.md`](/backend/docs/ConnectingToMongoDB.md) for further explaination**

### Creating Express application to serve GraphQL API

**👉 checkout [`server.js`](/backend/src/server.js)**

**👉 checkout [ExpressApplication](/docs/ExpressApplication.md) for further explaination of code in `server.js`)**

### Run the server

```script
node app.js
```

Key Changes from Apollo-Server V3 to V4:

apollo-server-express → replaced with @apollo/server + @apollo/server/express4.

applyMiddleware() → replaced with expressMiddleware(server).

Must explicitly add cors() + bodyParser.json().

Otherwise, schema + resolvers work the same
