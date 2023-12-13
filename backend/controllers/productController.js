const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  res.json(req.body);
  const { name, category, subcategory } = req.body;
  const imageUrl = req.file.path;
  try {
    let product = await Product.create({
      name: name,
      category: category,
      subCategory: subcategory,
      image: imageUrl,
    });
    res.status(200).json({ message: "successful added", product });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
exports.getProduct = async (req, res) => {
  try {
    const { category, subCategory } = req.query;
    let query = {};
    if (category) {
      query.category = category;
    }
    if (subCategory) {
      query.subCategory = subCategory;
    }
    const product = await Product.find(query);
    res.json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
