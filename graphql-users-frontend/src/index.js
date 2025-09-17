import React from "react";
import ReactDOM from "react-dom/client"; //→ Used to render React components into the actual DOM (the HTML page).
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App"; //→ main/root React component (defined in App.js) that represents the whole application.
import { ApolloProvider } from "@apollo/client/react"; //→ makes Apollo Client available to all components.
import client from "./apollo/apolloClient"; // → The configured Apollo Client instance from `apolloClient.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// Following is the default code created when I created from react app
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
