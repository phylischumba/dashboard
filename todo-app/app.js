const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require("./server/routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Nothing found",
  })
);

app.listen(8000, () => {
  console.log("running at port 8000");
});

module.exports = app;
