import React, { useState, useEffect } from "react";
import { ProductContainer } from "./ProductList.styled";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    //fetchItems();
  }, []);

  return (
    <ProductContainer>
      <Product />
    </ProductContainer>
  );
};

export default ProductList;
