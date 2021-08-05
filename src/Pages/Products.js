import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategoryId } from "../store/data";
import { useLocation } from "react-router-dom";
import { CDN_URL } from "../constants";
import { getProductsByCategoryId } from "../store/data";
import classes from "./Products.module.scss";
import ProductTile from "../Components/UI/ProductTile";
export default function Products() {
  const location = useLocation();
  const dispatch = useDispatch();
  const search = location.search;
  const cat_id = new URLSearchParams(search).get("category");
  useEffect(() => {
    dispatch(fetchProductsByCategoryId(cat_id));
  }, [dispatch, cat_id]);
  const products = useSelector(getProductsByCategoryId);
  products !== "" && console.log(products);
  return (
    products !== "" && (
      <div>
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
        </div>
      </div>
    )
  );
}
