import React from "react";
import Card from "../UI/Card";
import classes from "./SearchBar.module.scss";
import { Search } from "@material-ui/icons";

export default function SearchBar() {
  return (
    <Card className={classes.search}>
      <input
        className={classes.search_input}
        placeholder="Search for Products"
      />
      <Search />
    </Card>
  );
}
