import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
const initialState = {
  categories: "",
  products: "",
  productsByCategoryId: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsByCategoryId: (state, action) => {
      state.productsByCategoryId = action.payload;
    },
  },
});

//Search Api Call for Categories Search by Name
export const fetchCategories = (query) => {
  const endpoint = BASE_URL;
  var baseUrl = new URL(endpoint + "/category/search");
  var params = { query };
  baseUrl.search = new URLSearchParams(params).toString();
  return async (dispatch) => {
    const fetchCategoriesCall = async () => {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = response.json();
      return data;
    };
    try {
      const catData = await fetchCategoriesCall();
      if (catData.code === 401) {
        console.log("Error");
      } else {
        await dispatch(dataSlice.actions.setCategories(catData.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//Search Api for Products Search by Name
export const fetchProducts = (query) => {
  const endpoint = BASE_URL;
  var baseUrl = new URL(endpoint + "/product/search");
  var params = { query };
  baseUrl.search = new URLSearchParams(params).toString();
  return async (dispatch) => {
    const fetchProductsCall = async () => {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = response.json();
      return data;
    };
    try {
      const prodData = await fetchProductsCall();
      if (prodData.code === 401) {
        console.log("Error");
      } else {
        await dispatch(dataSlice.actions.setProducts(prodData.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProductsByCategoryId = (category_id) => {
  const endpoint = BASE_URL;
  var baseUrl = new URL(endpoint + "/products");
  var params = { category_id };
  baseUrl.search = new URLSearchParams(params).toString();
  return async (dispatch) => {
    const fetchProductsByCategoryIdCall = async () => {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = response.json();
      return data;
    };
    try {
      const prodData = await fetchProductsByCategoryIdCall();
      if (prodData.code === 401) {
        console.log("Error");
      } else {
        await dispatch(
          dataSlice.actions.setProductsByCategoryId(prodData.data)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default dataSlice;
export const getCategories = (state) => state.data.categories;
export const getProducts = (state) => state.data.products;
export const getProductsByCategoryId = (state) =>
  state.data.productsByCategoryId;
