import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { CartTitleStyled } from "./Cart.styled";
import CartIco from "./Cartico";
import CartPreviewItem from "./CartPreviewItem";

const Cart = ({ cartData, plusModifier, minusModifier }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
