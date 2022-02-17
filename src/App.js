import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import { GlobalStyle } from "./GlobalStyle";
import ProductDetail from "./components/Details/Details";
import ProductList from "./components/Products/ProductList";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addTocart = (data, amount) => {
    const repeated = shoppingCart.some((item) => item.id === data.id);

    if (repeated) {
      //create a copy for the state and update the state width the copy;
      const repeateELIndex = shoppingCart.findIndex(
        (item) => item.id === data.id
      );
      const copy = [...shoppingCart];
      copy[repeateELIndex].amount += amount;
      setShoppingCart(copy);
    } else {
      setShoppingCart([...shoppingCart, { id: data.id, item: data, amount }]);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header products={shoppingCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetail addTocart={addTocart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
