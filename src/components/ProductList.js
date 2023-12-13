import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [product, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [subcategoryFilter, setSubCategoryFilter] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/product/getproduct?category=${categoryFilter}&subcategory=${subcategoryFilter}`
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch(
        (error) => {
          console.log(error);
        },
        [categoryFilter, subcategoryFilter]
      );
  });

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };
  const handleSubCategoryChange = (e) => {
    setSubCategoryFilter(e.target.value);
  };
  return (
    <>
      <h1>Product List</h1>
      <div className="container ">
        <div className="mb-3">
          <label htmlFor="categoryFilter" className="form-label">
            categoryFilter
          </label>
          <input
            type="text"
            className="form-control"
            id="categoryFilter"
            value={categoryFilter}
            onChange={handleCategoryChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subcategoryFilter" className="form-label">
            subcategoryFilter
          </label>
          <input
            type="text"
            className="form-control"
            id="subcategoryFilter"
            value={subcategoryFilter}
            onChange={handleSubCategoryChange}
          />
        </div>
      </div>

      <ul className="container ">
        {product.map((product) => (
          <li key={product._id}>
            <img
              src={`http://localhost:5000/backend/${product.image}`}
              alt={product.name}
            />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.subCategory}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
