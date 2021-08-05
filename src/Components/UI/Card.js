import React from "react";
import classes from "./Card.module.scss";
export default function Card(props) {
  return (
    <div
      className={`${props.className} ${classes.container}`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseOut={props.onMouseOut}
    >
      {props.children}
    </div>
  );
}
