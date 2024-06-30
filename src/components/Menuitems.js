import React, { useState } from 'react';
import './Menuitems.css';

const menuItems = [
  {
    category: 'Starter',
    items: [
      {
        image: '/assets/starter1.png',
        name: 'grilled-chicken',
        price: 'rs. 450',
        offer: '10% off',
        popularity: '★★★★☆',
        rating: 4.2
      },
      {
        image: '/assets/starter2.png',
        name: 'Stuffed Mushrooms',
        price: 'Rs. 360',
        offer: '15% off',
        popularity: '★★★★★',
        rating: 4.8
      },
      {
        image: '/assets/starter3.png',
        name: 'veggie-nuggets',
        price: 'Rs, 350',
        offer: '5% off',
        popularity: '★★★☆☆',
        rating: 3.5
      }
    ]
  },
  {
    category: 'Main Course',
    items: [
      {
        image: './assets/maincourse1.png',
        name: 'Mushroom',
        price: 'Rs. 390',
        offer: '20% off',
        popularity: '★★★★☆',
        rating: 4.5
      },
      {
        image: './assets/maincourse2.png',
        name: 'Grilled-paneer',
        price: 'Rs. 210',
        offer: '15% off',
        popularity: '★★★★★',
        rating: 4.7
      },
      {
        image: './assets/maincourse3.png',
        name: 'Dosa ',
        price: 'Rs. 240',
        offer: '10% off',
        popularity: '★★★☆☆',
        rating: 3.8
      }
    ]
  },
  {
    category: 'Dessert',
    items: [
      {
        image: './assets/Dessert1.png',
        name: 'Cheesecake',
        price: 'Rs. 430',
        offer: '20% off',
        popularity: '★★★★☆',
        rating: 4.3
      },
      {
        image: './assets/Dessert2.png',
        name: 'Blueberry CheeseCake',
        price: 'Rs. 220',
        offer: '10% off',
        popularity: '★★★★★',
        rating: 4.9
      },
      {
        image: './assets/Dessert3.png',
        name: 'Chocolate mousse',
        price: 'Rs. 295',
        offer: '15% off',
        popularity: '★★★★☆',
        rating: 4.1
      }
    ]
  }
];

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="menu-container">
      {menuItems.map((category) => (
        <div key={category.category} className="menu-category">
          <h2 className="category-title">{category.category}</h2>
          <div className="items-container">
            {category.items.map((item) => (
              <div key={item.name} className="menu-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                  <p className="item-offer">{item.offer}</p>
                  <p className="item-popularity">{item.popularity}</p>
                  <p className="item-rating">Rating: {item.rating}</p>
                  <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
