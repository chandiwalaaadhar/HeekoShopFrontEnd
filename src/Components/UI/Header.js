import React from "react";
import Card from "./Card";
import classes from "./Header.module.scss";
import { ShoppingCart } from "@material-ui/icons";

export default function Header() {
  return (
    <Card className={classes.header}>
      <div>Heeko Shop</div>
      <ShoppingCart />
    </Card>
  );
}
