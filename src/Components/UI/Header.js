import React, { useState } from "react";
import Card from "./Card";
import classes from "./Header.module.scss";
import { ShoppingCart } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { checkoutApi, getCart } from "../../store/data";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const search = location.search;
  const cat_id = new URLSearchParams(search).get("category");
  const [viewCart, setViewCart] = useState(false);
  const onFocusHandler = () => {
    setTimeout(() => setViewCart(true), 500);
  };
  const cartItems = useSelector(getCart);
  const checkoutHandler = () => {
    dispatch(checkoutApi(cartItems, cat_id));
    setViewCart(false);
  };

  return (
    <Card className={classes.header}>
      <div>Heeko Shop</div>
      <div className={classes.shopping} onMouseEnter={onFocusHandler}>
        <ShoppingCart />
        <p className={classes.count}>{cartItems.length}</p>
      </div>
      {viewCart && (
        <Modal className={classes.overlay}>
          <Card
            className={classes.cart_popup}
            onMouseEnter={() => setViewCart(true)}
            onMouseOut={() => setTimeout(() => setViewCart(false), 2000)}
          >
            <h3>{`${cartItems.length} Products in Cart`}</h3>
            {cartItems !== 0 && (
              <button onClick={checkoutHandler}>Checkout</button>
            )}
          </Card>
        </Modal>
      )}
    </Card>
  );
}
