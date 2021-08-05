import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import classes from "./ProductTile.module.scss";
import { dataActions } from "../../store";
export default function ProductTile(props) {
  const dispatch = useDispatch();
  const addtoCartHandler = (id) => {
    dispatch(dataActions.addtoCartItem(id));
  };
  return (
    <Card className={classes.container}>
      <h3 className={classes.heading}>{props.data.prod_name}</h3>
      <p className={classes.description}>{props.data.prod_description}</p>
      <span className={classes.price_container}>
        <h5 className={classes.price}>INR {props.data.price}</h5>
        <h4>INR {props.data.discounted_price}</h4>
      </span>
      <h6 className={classes.stock_badge}>{props.data.stock}</h6>
      <Button
        variant="contained"
        onClick={() => addtoCartHandler(props.data._id)}
      >
        Add to Cart
      </Button>
    </Card>
  );
}
