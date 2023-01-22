const express = require("express");
const User = require("../models/User.js");

const router = express.Router();

router.get("/search", (req, res) => {
  const query = req.query.name;
  // search mongoose for users with name containing query
  User.find({ displayName: { $regex: query, $options: "i" } }, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.send(users);
    }
  });
});

module.exports = router;
