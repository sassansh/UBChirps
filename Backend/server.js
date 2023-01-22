require("./database.js");
const express = require("express");
const cors = require("cors");
const authentication = require("./api/authentication");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", authentication);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
