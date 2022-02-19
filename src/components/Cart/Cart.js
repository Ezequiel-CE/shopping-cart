import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import {
  CartTitleStyled,
  StyledCartButton,
  StyledTotal,
  StyledAlert,
} from "./Cart.styled";
import CartIco from "./Cartico";
import CartPreviewItem from "./CartPreviewItem";

const Cart = ({ cartData, setShoppingCart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const plusModifier = (data) => {
    //create a copy for the state and update the state width the copy;
    const repeateELIndex = cartData.findIndex((item) => item.id === data.id);
    const copy = [...cartData];
    copy[repeateELIndex].amount += 1;
    setShoppingCart(copy);
  };

  const minusModifier = (data) => {
    const repeateELIndex = cartData.findIndex((item) => item.id === data.id);
    const copy = [...cartData];
    copy[repeateELIndex].amount -= 1;
    //if amount 0 delete object
    if (copy[repeateELIndex].amount === 0) {
      const newCopy = copy.filter((item) => item.id !== data.id);
      setShoppingCart(newCopy);
    } else {
      setShoppingCart(copy);
    }
  };

  const deleteItemCart = (data) => {
    const newCart = cartData.filter((item) => item.id !== data.id);
    setShoppingCart(newCart);
  };

  const getTotal = () => {
    const total = cartData.reduce(
      (acc, product) => acc + product.item.price * product.amount,
      0
    );
    return total.toFixed(2);
  };

  const thanks = () => {
    alert(`       ▄      ▄    
    ▐▒▀▄▄▄▄▀▒▌   
  ▄▀▒▒▒▒▒▒▒▒▓▀▄  
▄▀░█░░░░█░░▒▒▒▐  
▌░░░░░░░░░░░▒▒▐  
▐▒░██▒▒░░░░░░░▒▐  
▐▒░▓▓▒▒▒░░░░░░▄▀  
▀▄░▀▀▀▀░░░░▄▀    
  ▀▀▄▄▄▄▄▀▀       `);
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
          {cartData.length > 0 ? (
            <>
              <StyledTotal>Total: ${getTotal()}</StyledTotal>
              <StyledCartButton onClick={thanks}>Checkout</StyledCartButton>
            </>
          ) : (
            <StyledAlert>Your cart is empty</StyledAlert>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
