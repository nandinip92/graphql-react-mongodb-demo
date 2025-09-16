# Connecting to MongoDB

👉 chekout [database.js](/database.js) file.

```javascript
const mongoose = require("mongoose");
```

- **Imports Mongoose** → a Node.js library used to interact with MongoDB.
- Think of Mongoose as a "middleman" that helps you work with MongoDB using JavaScript objects instead of writing raw database commands.

```javascript
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb://admin:graphql-mongo-demo@localhost:27017/graphql-mongo?authSource=admin"
    );

    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDatabase;
```

**_Explaination for the above code:_**

- Defines an `async` function connectToDatabase.

  - Inside the function:

    - `mongoose.connect(...)` → tries to connect to MongoDB at:
    - `mongodb://localhost:27017` → your MongoDB server running locally on port 27017.

    - `graphql-mongo` → the database name (MongoDB will create it automatically if it doesn’t exist).

  - Authentication added:

    - `admin` → MongoDB username

    - `graphql-mongo-demo` → password

    - `?authSource=admin` → tells MongoDB to authenticate the user against the admin database. If your user is created in a database other than the one you are connecting to, you must use authSource. Without authSource=admin, MongoDB tries to authenticate the user in the target database (graphql-mongo in your case) and will fail.

- If the connection works → logs `"Successfully connected to MongoDB"`.

- If it fails → catches the error and logs `"Error connecting to MongoDB: ..."`.

```javascript
module.exports = connectToDatabase;
```

Exports the function so you can reuse it in other files.

Example: in `server.js`/ `app.js`, you can call it like:

```javascript
const connectToDatabase = require("./db");
connectToDatabase();
```
