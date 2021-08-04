import React from "react";
import Card from "./Card";
import classes from "./CategoryTile.module.scss";
export default function CategoryTile(props) {
  return (
    <Card className={classes.container}>
      <h4>{props.cat_name}</h4>
    </Card>
  );
}
