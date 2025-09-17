# How to run Frontend

Change the directory to frontend folder `graphql-users-frontend` and `npm install` to install necessary packages

```bash
cd graphql-users-frontend
npm install
```

Then start the app;lication using the following

```bash
npm start
```

**_NOTE:_**

Make sure you run you backend before tsrting the front end.

**👉 Checkout [`BACKEND-README.md`](/backend/BACKEND-README.md)**

Run the following commands inside `backend` folder:

```bash
docker-compose up
```

```bash
npm install
node server.js
```

After running the application. It looks like the following:

![localhoseImage](./graphql-users-frontend/docs/browserImage.png)

# Steps used to create React Frontend

## 1️⃣ Create a New React App

Open a terminal and run:

```bash
npx create-react-app graphql-users-frontend
```

`npx create-react-app` → creates a new React project with all required dependencies.

graphql-users-frontend → folder name for your project.

Once done, navigate into your project:

```bash
cd graphql-users-frontend
```

## 2️⃣ Install Apollo Client and GraphQL

Inside the React project folder, run:

```bash
npm install @apollo/client graphql
```

- `@apollo/client` → Apollo Client for React.

- `graphql` → required for queries and mutations.

## 3️⃣ Set Up Apollo Client

It has a The configured Apollo Client instance that knows where your GraphQL server is and how to fetch data.

**👉 Checkout [`src/apollo/apolloClient.js`](./src/apollo/apolloClient.js)**

For further explaination on Apollo client instance code checkout [`apolloClient.md`]()

## 4️⃣ Wrap the App with ApolloProvider

**👉 Checkout code in `src/index.js`. look carefully at the code of Apollo Provider**

`ApolloProvider` → A special provider component from `@apollo/client`. It makes Apollo Client available to all React components (so you can run GraphQL queries/mutations inside your components).

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apolloClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
```

## 5️⃣ Create GraphQL Queries & Mutations

**👉 Checkout `./src/graphql/queries.js` and `./src/graphql/muations.js`**

👉 Checkout [`useQuery.md`] and [`useMutation.md`] for further explaination of the code

# Folder structure

```sql

graphql-users-frontend/
│
├── public/                  # Static assets
│   └── index.html
│
├── src/
│   ├── apollo/              # Apollo Client setup
│   │   └── apolloClient.js
│   │
│   ├── graphql/             # GraphQL queries, mutations, fragments
│   │   ├── queries.js
│   │   ├── mutations.js
│   │   └── fragments.js     # optional, reusable GraphQL snippets
│   │
│   ├── components/          # Reusable UI components
│   │   ├── UserList.js
│   │   ├── CreateUser.js
│   │   └── common/          # small generic components (e.g., Button, Input)
│   │
│   ├── pages/               # Page-level components (route-based)
│   │   ├── Home.js          # Example: Home page combines UserList + CreateUser
│   │   └── About.js         # Example extra page
│   │
│   ├── styles/              # Global CSS, theme, or styled-components
│   │   └── App.css
│   │
│   ├── App.js               # Root component
│   ├── index.js             # Entry point (wraps ApolloProvider)
│   └── reportWebVitals.js
│
├── package.json
└── README.md
```

**Resource Links**

https://www.apollographql.com/docs/react/get-started
