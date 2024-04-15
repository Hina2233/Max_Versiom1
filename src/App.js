import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Components
import Header from "./components/Header";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import PizzaSelection from "./components/PizzaSelection";
import Cart from "./components/Cart";
import { CartProvider } from './CartContext';
import CartContext from "./CartContext";

function App() {
  <div className="navigate-home-button">
        <Link to="../Home" className="home-link">
          Go to Home Page
        </Link>
  </div>
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  return (
    <>
      <CartProvider> {/* Wrap your App with CartProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PizzaSelection" element={<PizzaSelection />} />
          <Route path="/Customize" element={<Customize ingredients={ingredients} setIngredients={setIngredients} />} />
          <Route path="/checkout" element={<Checkout ingredients={ingredients} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider> {/* Closing CartProvider */}
    </>
  );
}

export default App;
