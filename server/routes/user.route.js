const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get users");
  })
  .post((req, res) => {
    res.send("posting to user");
  });
router
  .route("/name")
  .get((req, res) => {
    res.send("Get users name");
  })
  .post((req, res) => {
    res.send("posting to user");
  });

module.exports = router;
