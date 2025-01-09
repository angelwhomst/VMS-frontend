import React, { useState } from "react";
import "./AddProductsForm.css";

const AddProductsForm = ({ onClose, addProduct }) => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    supplier: "",
    category: "",
    sizeChart: "",
    threshold: "",
    stockAvailable: "",
    reorderQuantity: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({ ...prevState, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData); // Add the new product to the list
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-scroll-container">
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="men">Men</option>
                <option value="womens">Womens</option>
                <option value="girls">Girls</option>
                <option value="boys">Boys</option>
              </select>
            </div>

            <div className="form-group">
              <label>Product Image</label>
              <div className="image-upload">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <div className="image-placeholder">
                  {formData.image ? (
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Product"
                    />
                  ) : (
                    <p>Upload Image</p>
                  )}
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductsForm;