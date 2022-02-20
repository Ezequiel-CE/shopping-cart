import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import { GlobalStyle } from "./GlobalStyle";
import ProductDetail from "./components/Details/Details";
import ProductList from "./components/Products/ProductList";
import { BackgroundContainer } from "./components/shared/shared.styles";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <BackgroundContainer>
      <BrowserRouter>
        <GlobalStyle />
        <Header products={shoppingCart} setShoppingCart={setShoppingCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList products={products} />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetail
                products={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </BackgroundContainer>
  );
};

export default App;
