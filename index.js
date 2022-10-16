require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const mongodb = require("./Database");
const responseHandler = require("./Middlewares/response");
const errorHandler = require("./Middlewares/errorHandler");

mongodb.checkDb((err) => {
  if (!err) {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.get("/", (req, res) => {
      res.send("API of Wedding Putri and Arif");
    });
    app.use("/", require("./routes"));
    app.use(responseHandler);
    app.use(errorHandler);
  }
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));

module.exports = app;
