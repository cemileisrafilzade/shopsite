import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import ProductInfo from "../pages/ProductInfo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product-info/:id" element={<ProductInfo />} />
    </Routes>
  );
};
export default AllRoutes;
