import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../pages/Authentication";
import MyFavourites from "../pages/MyFavourites";
import ProductInfo from "../pages/ProductInfo";
import Products from "../pages/Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product-info/:id" element={<ProductInfo />} />
      <Route path="/sign-in" element={<Authentication />} />
      <Route path="/my-favs" element={<MyFavourites />} />
    </Routes>
  );
};
export default AllRoutes;
