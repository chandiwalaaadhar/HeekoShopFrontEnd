import React from "react";
import Card from "./Card";
import classes from "./ProductTile.module.scss";
export default function ProductTile(props) {
  return (
    <Card className={classes.container}>
      <h3 className={classes.heading}>{props.data.prod_name}</h3>
      <p className={classes.description}>{props.data.prod_description}</p>
      <span className={classes.price_container}>
        <h5 className={classes.price}>INR {props.data.price}</h5>
        <h4>INR {props.data.discounted_price}</h4>
      </span>
      <h6 className={classes.stock_badge}>{props.data.stock}</h6>
    </Card>
  );
}
