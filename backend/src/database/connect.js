//Imports Mongoose → a Node.js library used to interact with MongoDB.
const mongoose = require("mongoose");

const mongoURI = "mongodb://admin:graphql-react-mongo-demo@localhost:27017/graphql-mongo?authSource=admin"
//`mongoose.connect(...)` → tries to connect to MongoDB at:
// mongodb://localhost:27017 → your MongoDB server running locally on port 27017.
//graphql-mongo → the database name (MongoDB will create it automatically if it doesn’t exist).
async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDatabase;