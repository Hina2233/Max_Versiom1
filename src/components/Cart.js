import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './Cart.css';
import Pizzaman2 from "../assets/OrderRecieved.png";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, pizza) => {
    return acc + parseFloat(pizza.price.substring(1)); // Removing '$' and parsing to float
  }, 0).toFixed(2);

  const generateOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const placeOrder = () => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setIsOrderPlaced(true);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <div className="cart-header">
          <span>Pizza Name</span>
          <span>Size</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {cartItems.map((pizza, index) => (
          <div key={index} className="cart-item" style={{ backgroundColor: 'orange', color: 'white' }}>
            <span>{pizza.name}</span>
            <span>{pizza.size}</span>
            <span>{pizza.price}</span>
            <button className="remove-button" onClick={() => removeFromCart(pizza.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total Amount: ${totalAmount}</span>
      </div>
      {totalAmount > 0 ? (
        !isOrderPlaced ? (
          <button className="place-order-button" onClick={placeOrder}>Place Your Order</button>
        ) : (
          <div className="order-received">
            <img src={Pizzaman2} alt="Order Received" className="order-image" />
            <div className="order-text">
              <h3>ORDER PLACED</h3>
              <p>Your Order Number #<strong>{orderNumber}</strong></p>
              <p>Be ready, the delicious is coming your way very soon!</p>
            </div>
          </div>
        )
      ) : (
        <div className="empty-cart-message">
          <p>Add items to your order</p>
        </div>
      )}
    </div>
  );
};

export default Cart;