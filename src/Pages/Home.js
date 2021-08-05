import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getCategories } from "../store/data";
import CategoryTile from "../Components/UI/CategoryTile";
import classes from "./Home.module.scss";
export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  useEffect(() => {
    dispatch(fetchCategories(""));
  }, [dispatch]);
  return (
    <div className={classes.container}>
      <div className={classes.categories}>
        {categories !== "" &&
          categories.map((category) => (
            <CategoryTile key={category._id} data={category} />
          ))}
      </div>
    </div>
  );
}
