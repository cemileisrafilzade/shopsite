import { Breadcrumbs } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import { AppContext } from "../context";
import "../styles/main.scss";
export default function MyFavourites() {
  const { favIds, products } = useContext(AppContext);
  const favProducts = products.filter((product) => favIds.includes(product.id));
  // console.log(favIds);
  console.log(favProducts);
  return (
    <div className="container">
      <div className="links">
        <Breadcrumbs>
          <Link to={"/"}>HomePage</Link>
          <Link className="active">My favourites</Link>
        </Breadcrumbs>
      </div>
      <div className="myFavs">
        {favProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
