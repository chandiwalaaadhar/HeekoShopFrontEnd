import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategoryId } from "../store/data";
import { useLocation } from "react-router-dom";
import { CDN_URL } from "../constants";
import { getProductsByCategoryId } from "../store/data";
import { Sort } from "@material-ui/icons";
import classes from "./Products.module.scss";
import ProductTile from "../Components/UI/ProductTile";

export default function Products() {
  const location = useLocation();
  const dispatch = useDispatch();
  const search = location.search;
  const cat_id = new URLSearchParams(search).get("category");
  const [sort, setSort] = useState(0);
  useEffect(() => {
    dispatch(fetchProductsByCategoryId(cat_id, sort));
  }, [dispatch, cat_id, location.search, sort]);
  const products = useSelector(getProductsByCategoryId);

  return (
    products !== "" && (
      <>
        <h1 className={classes.cat_name}>{products.cat_name}</h1>
        <img
          src={`${CDN_URL}${products.cat_img}`}
          alt={products.cat_name}
          className={classes.cat_img}
        />
        <div className={classes.products}>
          {products.products.map((product) => (
            <ProductTile key={product._id} data={product} />
          ))}
          <div
            className={classes.sorter}
            onClick={() => (sort === 0 ? setSort(1) : setSort(0))}
          >
            <Sort /> <h5>Sort</h5>
          </div>
        </div>
      </>
    )
  );
}
