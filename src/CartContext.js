import React, { createContext, useContext, useState } from 'react';

// Create a new context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cartItems.find(item => item.id === pizza.id && item.size === pizza.size);
    
    if (existingPizza) {
      // Increase the quantity if pizza with the same size is already in the cart
      const updatedCart = cartItems.map(item => 
        item.id === existingPizza.id && item.size === existingPizza.size ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Add new pizza to cart
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};