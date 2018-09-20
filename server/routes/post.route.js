const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get posts");
  })
  .post((req, res) => {
    res.send("posting to posts");
  });
router
  .route("/title")
  .get((req, res) => {
    res.send("Get post title");
  })
  .post((req, res) => {
    res.send("posting to user");
  });

module.exports = router;
