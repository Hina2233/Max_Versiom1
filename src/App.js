import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";

function App() {
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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Customize
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout ingredients={ingredients} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
