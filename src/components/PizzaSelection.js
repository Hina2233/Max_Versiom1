import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PizzaSelection.css';
import Banner from "../assets/Web-Banner-01.png";
import CartIcon from "../assets/cart-icon.png";
import { useCart } from '../CartContext';

import Margherita from "../assets/Margherita.png";
import Pepperoni from "../assets/Pepperoni.png";
import Hawaiian from "../assets/Hawaiian.png";
import MeatLovers from "../assets/MeatLovers.png";
import VeggieSupreme from "../assets/VeggieSupreme.png";
import BBQChicken from "../assets/BBQChicken.png";
import FourCheese from "../assets/FourCheese.png";
import ChickenAlfredo from "../assets/ChickenAlfredo.png";
import BuffaloChicken from "../assets/BuffaloChicken.png";
import Supreme from "../assets/Supreme.png";

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Classic tomato, mozzarella, and basil',
    price: '$10',
    image: Margherita,
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Classic pepperoni and mozzarella',
    price: '$12',
    image: Pepperoni,
  },
  {
    id: 3,
    name: 'Hawaiian',
    description: 'Tomato sauce, mozzarella cheese, ham, and pineapple',
    price: '$11',
    image: Hawaiian,
  },
  {
    id: 4,
    name: 'Meat Lovers',
    description: 'Tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, and ham',
    price: '$12',
    image: MeatLovers,
  },
  {
    id: 5,
    name: 'Veggie Supreme',
    description: 'Tomato sauce, mozzarella cheese, bell peppers, onions, olives, and mushrooms',
    price: '$11',
    image: VeggieSupreme,
  },
  {
    id: 6,
    name: 'BBQ Chicken',
    description: 'BBQ sauce, mozzarella cheese, chicken, red onions, and cilantro',
    price: '$13',
    image: BBQChicken,
  },
  {
    id: 7,
    name: 'Four Cheese',
    description: 'Tomato sauce, mozzarella cheese, cheddar cheese, parmesan cheese, and feta cheese',
    price: '$11',
    image: FourCheese,
  },
  {
    id: 8,
    name: 'Chicken Alfredo',
    description: 'Alfredo sauce, mozzarella cheese, chicken, and spinach',
    price: '$13',
    image: ChickenAlfredo,
  },
  {
    id: 9,
    name: 'Buffalo Chicken',
    description: 'Buffalo sauce, mozzarella cheese, chicken, red onions, and ranch drizzle',
    price: '$13',
    image: BuffaloChicken,
  },
  {
    id: 10,
    name: 'Supreme',
    description: 'Tomato sauce, mozzarella cheese, pepperoni, sausage, bell peppers, onions, and olives',
    price: '$12',
    image: Supreme,
  },
];

const sizes = ['S', 'M', 'L', 'XL'];
const priceIncrements = {
  'S': 0,
  'M': 2,
  'L': 5,
  'XL': 10
};

const PizzaSelection = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S'); // Default size is Small
  const [currentPrice, setCurrentPrice] = useState('$10'); // Default price

  const { addToCart } = useCart();  // Using the addToCart method from CartContext

  const handleSelectPizza = (pizzaId) => {
    setSelectedPizza(pizzaId);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    const basePrice = pizzas.find(pizza => pizza.id === selectedPizza)?.price || '$10'; // Default base price
    const basePriceNumber = parseInt(basePrice.slice(1));
    const newPrice = basePriceNumber + priceIncrements[e.target.value];
    setCurrentPrice(`$${newPrice}`);
  };

  const handleAddToCart = (pizza) => {
    const selectedPizza = pizzas.find(p => p.id === pizza.id);
    const basePrice = parseInt(selectedPizza.price.slice(1));
    const newPrice = basePrice + priceIncrements[selectedSize];
    
    addToCart({
      id: selectedPizza.id,
      name: selectedPizza.name,
      size: selectedSize,
      price: `$${newPrice}`,
      image: selectedPizza.image,
    });
  };

  return (
    <div className="banner">
      <img 
        src={Banner} 
        alt="Banner" 
        className="bannerImage"
      />
      <div className="pizza-selection-container">
        <h2>Select Your Pizza</h2>
        <div className="pizza-cards">
          <div className="cart-button-container">
            <Link to="/cart" className="cartButton">
              <img src={CartIcon} alt="Cart" className="cartIcon" />
            </Link>
          </div>
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="pizza-card">
              <img src={pizza.image} alt={pizza.name} />
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>
              <p><strong>{currentPrice}</strong></p>
              <div className="select-size">
                <select value={selectedSize} onChange={handleSizeChange}>
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              <button 
                className="addToBasket"
                onClick={() => handleAddToCart(pizza)}
              >
                Add to Basket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaSelection;