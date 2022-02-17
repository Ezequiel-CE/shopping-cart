import React from "react";

const Cart = ({ cartData }) => {
  console.log(cartData);
  return <div>{cartData.map((item) => item.title)}</div>;
};

export default Cart;
