const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

require("./child");
const root = require("./routes/root.route");
const user = require("./routes/user.route");
const post = require("./routes/post.route");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); //prevent cors request err
app.use(helmet()); //armors our api against attacks

const port = parseInt(process.env.PORT, 10) || 8000;

// app
//   .route("/")
//   .get(function(req, res) {
//     res.send("Hello World!");
//   })
//   .post((req, res) => {
//     res.send("Thanks for the post");
//   });

app.use("/", root);
app.use("/user", user);
app.use("/post", post);

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
