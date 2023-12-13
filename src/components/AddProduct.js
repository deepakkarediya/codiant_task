import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    subcategory: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      image: event.target.files[0],
    }));
  };
  const handleAddProduct = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("category", newProduct.category);
    formData.append("subcategory", newProduct.subcategory);
    formData.append("image", newProduct.image);
    axios
      .post("http://localhost:5000/product/addproduct", formData)
      .then((response) => {
        console.log(response.data);
        setNewProduct({
          name: "",
          category: "",
          subcategory: "",
          image: null,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>AddProduct</h1>
      <form onSubmit={handleAddProduct}>
        <div className="container ">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              product name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subcategory" className="form-label">
              Subcategory
            </label>
            <input
              type="text"
              className="form-control"
              id="subcategory"
              name="subcategory"
              value={newProduct.subcategory}
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="image" className="form-label">
            Product Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Add product</button>
      </form>
    </>
  );
}

export default AddProduct;
