import React from "react";
import "./Admin.css"; // Make sure you style the modal here

const Admin = ({ onClose }) => {
  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h2>Admin</h2>
        </div>
        <div className="modal-body">
          {/* Predefined values in text boxes */}
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              defaultValue="SOLEOPS SUPPLIERS"
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="sellerName">Seller Name</label>
            <input
              type="text"
              id="sellerName"
              defaultValue="John Doe"
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="sellerContact">Seller Contact Number</label>
            <input
              type="text"
              id="sellerContact"
              defaultValue="+1-800-123-4567"
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              defaultValue="1234 Business Blvd, City, Country"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
