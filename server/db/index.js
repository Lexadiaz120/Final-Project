// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URL = process.env.MONGODB_DB || "mongodb+srv://alekseimotin:123@cluster0.12bzv.mongodb.net/Digital-Search";

mongoose
  .connect(MONGO_URL)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    ); 
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
