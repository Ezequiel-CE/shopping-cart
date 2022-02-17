import React, { useState, useEffect } from "react";
import { ProductContainer } from "./ProductList.styled";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ProductContainer>
      {products.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </ProductContainer>
  );
};

export default ProductList;
