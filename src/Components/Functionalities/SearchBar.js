import React, { useRef } from "react";
import Card from "../UI/Card";
import classes from "./SearchBar.module.scss";
import { Search } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategories, fetchProductsByCategoryId } from "../../store/data";

export default function SearchBar() {
  const query = useRef(null);
  const location = useLocation();
  const search = location.search;
  const dispatch = useDispatch();
  const cat_id = new URLSearchParams(search).get("category");
  const searchHandler = () => {
    if (cat_id === null) {
      console.log("cats");
      setTimeout(() => dispatch(fetchCategories(query.current.value)), 400);
    } else {
      console.log("products");
      setTimeout(
        () =>
          dispatch(fetchProductsByCategoryId(cat_id, 0, query.current.value)),
        400
      );
    }
  };
  return (
    <Card className={classes.search}>
      {cat_id === null ? (
        <input
          className={classes.search_input}
          placeholder="Search for Categories"
          onChange={searchHandler}
          ref={query}
        />
      ) : (
        <input
          className={classes.search_input}
          placeholder="Search for Products"
          onChange={searchHandler}
          ref={query}
        />
      )}
      <Search />
    </Card>
  );
}
