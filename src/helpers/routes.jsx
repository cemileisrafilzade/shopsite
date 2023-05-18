import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../pages/Authentication";
import MyFavourites from "../pages/MyFavourites";
import ProductInfo from "../pages/ProductInfo";
import Products from "../pages/Products";
import ProfileSettings from "../pages/ProfileSettings";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Products />} />
      <Route exact path="/product-info/:id" element={<ProductInfo />} />
      <Route exact path="/sign-in" element={<Authentication />} />
      <Route exact path="/profile-settings" element={<ProfileSettings />} />
      <Route exact path="/my-favs" element={<MyFavourites />} />
    </Routes>
  );
};
export default AllRoutes;
