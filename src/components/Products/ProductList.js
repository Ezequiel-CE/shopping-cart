import React, { useState, useEffect } from "react";
import { ProductContainer } from "./ProductList.styled";
import Product from "./Product";

const ProductList = () => {
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
    <ProductContainer>
      {products.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </ProductContainer>
  );
};

export default ProductList;
