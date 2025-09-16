// Import mongoose (MongoDB ODM library for Node.js)
const mongoose = require("mongoose");

// Define a schema for the "User" collection
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a Mongoose model based on the schema
const UserModel = mongoose.model("User", UserSchema);

// Export the model so it can be used in other files
// Example: You can import UserModel and run queries like UserModel.find(), UserModel.create(), etc.
module.exports = UserModel;
