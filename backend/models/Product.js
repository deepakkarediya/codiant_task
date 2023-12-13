const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  subCategory: String,
  image: String,
});
const Product = mongoose.model("product", productSchema);
module.exports = Product;
