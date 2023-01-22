require("./database.js");
const express = require("express");
const cors = require("cors");
const authentication = require("./api/authentication");
const posts = require("./api/posts");
const users = require("./api/users");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
         res.send(200);
     } else {
         next();
     }
    });

// Routes
app.use("/", authentication);
app.use("/posts", posts);
app.use("/api/users", users);

app.all("/", (req, res) => {
  res.send("UBC Chirp Chirp");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
