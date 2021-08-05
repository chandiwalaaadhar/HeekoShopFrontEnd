import React from "react";
import { useHistory } from "react-router-dom";
import { CDN_URL } from "../../constants";
import Card from "./Card";
import classes from "./CategoryTile.module.scss";
export default function CategoryTile(props) {
  const history = useHistory();
  const onClickHandler = (cat_id) => {
    history.push(`/products/?category=${cat_id}`);
  };
  return (
    <Card
      className={classes.container}
      onClick={() => onClickHandler(props.data._id)}
    >
      <img
        src={`${CDN_URL}${props.data.cat_img}`}
        alt={props.data.cat_name}
        className={classes.image}
      />
      <h4>{props.data.cat_name}</h4>
      <p className={classes.cat_description}>{props.data.cat_description}</p>
    </Card>
  );
}
