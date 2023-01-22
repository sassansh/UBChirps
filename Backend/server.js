require("./database.js");
const express = require("express");
const cors = require("cors");
const authentication = require("./api/authentication");
const posts = require("./api/posts");
const users = require("./api/users");

require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
app.use("/", authentication);
app.use("/posts", posts);
app.use("/api/users", users);

app.all("/", (req, res) => {
  res.send("UBC Chirp Chirp");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
