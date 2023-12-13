const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");
const storage = multer.diskStorage({
  destination: "uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/addproduct",
  upload.single("image"),
  productController.createProduct
);
//by category and subcategory
router.get(
  "/getproduct",

  productController.getProduct
);

module.exports = router;
