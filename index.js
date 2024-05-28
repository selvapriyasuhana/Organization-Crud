var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerDocs = require('./swaggerDefinition.js');

var app = express();
var OrgRoutes = require("./Routes/Orgroutes.js");
var mongodb = require("./Config/Mongoconfig.js");

swaggerDocs(app);
app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const mongo = mongoose.connect(mongodb.url);
mongo.then(
  () => {
    console.log("Mongo_DB Connected Successfully");
  },
  (error) => {
    console.log(
      error,
      "Error, While connecting to Mongo_DB something went wrong"
    );
  }
);

var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});

app.get("/", (req, res) => res.send("Organization CRUD"));
app.use("/api", OrgRoutes);

module.exports = app;
