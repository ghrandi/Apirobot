const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

// create express app
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Configuring the database

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb+srv://malekghrandii:gryRkDvagNbuWXS6@cluster0.zstqfyj.mongodb.net/SS?retryWrites=true&w=majority", {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
})
.then(() => {
  console.log("Successfully connected to the database");
})
.catch((err) => {
  console.error("Error connecting to the database: ", err);
});

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Rest API By Chaaben Group." });
});



// Get the port number from the environment variable or use port 3000 as a default
const PORT = process.env.PORT || 4000;

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
