import React from "react";
import "./style/Header.css";

const StoreSection = () => {
  return (
    <div className="store-section">
      <div className="search-input">
        <input
          type="text"
          placeholder="Искать"
          className="search-input__field"
        />
      </div>
    </div>
  );
};

export default StoreSection;
