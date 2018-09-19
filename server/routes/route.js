const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Router middleware");
  next();
});

router
  .route("/")
  .get((req, res) => {
    res.send("Hello World!");
  })
  .post((req, res) => {
    res.send("Thanks for the post");
  });

module.exports = router;
