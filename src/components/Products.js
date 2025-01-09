import React, { useState } from "react";
import "./Products.css";
import AddProductsForm from "./AddProductsForm";
import EditProductForm from "./EditProductForm";

const Products = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState({
    womens: [],
    men: [],
    girls: [],
    boys: [],
  });

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (category, product, index) => {
    // Pass the selected product data to the state
    setSelectedProduct({ category, product, index });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => setIsEditModalOpen(false);

  const addProduct = (newProduct) => {
    const productWithImageURL = {
      ...newProduct,
      imageURL: newProduct.image ? URL.createObjectURL(newProduct.image) : null,
    };
    setProducts((prevState) => ({
      ...prevState,
      [newProduct.category]: [...prevState[newProduct.category], productWithImageURL],
    }));
  };

  const editProduct = (updatedProduct, category, index) => {
    const updatedProducts = [...products[category]];
    updatedProducts[index] = updatedProduct;
    setProducts((prevState) => ({
      ...prevState,
      [category]: updatedProducts,
    }));
  };

  /*const deleteProduct = (category, index) => {
    const updatedCategory = products[category].filter((_, i) => i !== index);
    setProducts((prevState) => ({
      ...prevState,
      [category]: updatedCategory,
    }));
  };
*/
  const countTotalProducts = () => {
    return Object.values(products).reduce((acc, category) => acc + category.length, 0);
  };

  return (
    <div className="products-container">
      <div className="dashboard">
        <div className="category-box">
          <h2>{countTotalProducts()}</h2>
          <p>Total Number of Products</p>
        </div>
        {["womens", "men", "girls", "boys"].map((category) => (
          <div key={category} className="category-box">
            <i
              className={`fa ${
                category === "womens"
                  ? "fa-female"
                  : category === "men"
                  ? "fa-male"
                  : category === "girls"
                  ? "fa-child"
                  : "fa-baby"
              }`}
            ></i>
            <h2>{products[category].length}</h2>
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          </div>
        ))}
      </div>

      <button className="add-product-btn" onClick={openAddModal}>
        Add Product
      </button>

      {isAddModalOpen && <AddProductsForm onClose={closeAddModal} addProduct={addProduct} />}

      {isEditModalOpen && selectedProduct && (
        <EditProductForm
          onClose={closeEditModal}
          product={selectedProduct.product} // Pass the selected product
          category={selectedProduct.category} // Pass the category
          index={selectedProduct.index} // Pass the index
          editProduct={editProduct} // Pass the editProduct function
        />
      )}

      <div className="products-list">
        {["womens", "men", "girls", "boys"].map((category) => (
          <div key={category}>
            <h3>{category.toUpperCase()}</h3>
            <div className="products-grid">
              {products[category].map((product, index) => (
                <div
                  className="product-card"
                  key={index}
                  onClick={() => openEditModal(category, product, index)} // Open the edit modal with correct data
                >
                  <img
                    src={product.imageURL || "placeholder.png"}
                    alt={product.productName}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h4>{product.productName}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
