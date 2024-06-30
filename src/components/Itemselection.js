import React from 'react';
import './Itemselection.css';

const Itemselection = () => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    window.location.href = `/?category=${selectedCategory}`;
  };

  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="starter">Starter</option>
        <option value="maincourse">Main Course</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Itemselection;
