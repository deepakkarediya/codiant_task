const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");

app.use("/backend/uploads", express.static(path.join(__dirname, "uploads")));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myProduct").then(() => {
  console.log("connected to mongo successfully");
});
const port = 5000;
app.use("/product", require("./routes/productRoutes"));

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
