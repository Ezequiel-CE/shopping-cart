import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>Details</div>;
};

export default ProductDetail;
