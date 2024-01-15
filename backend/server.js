require("dotenv").config();

const express = require("express");

// Create express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is listening on port", process.env.PORT);
});
