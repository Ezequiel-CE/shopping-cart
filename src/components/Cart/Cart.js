import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { CartTitleStyled } from "./Cart.styled";
import CartIco from "./Cartico";
import CartPreviewItem from "./CartPreviewItem";

const Cart = ({ cartData, changeCart, addTocart, shoppingCart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const plusModifier = (data) => {
    addTocart(data, 1);
  };

  const minusModifier = (data) => {
    const repeateELIndex = shoppingCart.findIndex(
      (item) => item.id === data.id
    );
    const copy = [...shoppingCart];
    copy[repeateELIndex].amount -= 1;
    //if amount 0 delete object
    if (copy[repeateELIndex].amount === 0) {
      const newCopy = copy.filter((item) => item.id !== data.id);
      changeCart(newCopy);
    } else {
      changeCart(copy);
    }
  };

  const deleteItemCart = (data) => {
    const newCart = shoppingCart.filter((item) => item.id !== data.id);
    changeCart(newCart);
  };

  return (
    <>
      <CartIco ShowHandler={handleShow} cartData={cartData} />

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "500px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartTitleStyled>Your shopping cart</CartTitleStyled>
          {cartData.map((item, i) => (
            <CartPreviewItem
              itemData={item}
              key={i}
              plusModifier={plusModifier}
              minusModifier={minusModifier}
              deleteItemCart={deleteItemCart}
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
