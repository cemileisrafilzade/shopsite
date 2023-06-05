import { Breadcrumbs } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import { AppContext } from "../context";
import "../styles/main.scss";
import { auth } from "../firebase/firebase";
export default function MyFavourites() {
  const { favIds, products } = useContext(AppContext);
  const favProducts = products.filter((product) => favIds.includes(product.id));

  return (
    <div className="container">
      <div className="links">
        <Breadcrumbs>
          <Link to={"/"}>HomePage</Link>
          <Link className="active">My favourites</Link>
        </Breadcrumbs>
      </div>
      {auth.currentUser ? (
        <div className="myFavs">
          {favProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {!favProducts.length && (
            <h2 className="emptyPageLink">
              Page is empty <Link to="/">Search all products</Link>
            </h2>
          )}
        </div>
      ) : (
        <div className="emptyPageContent">
          <h3 href="">
            Please{" "}
            <span>
              <Link to="/sign-in">Register or Log in</Link>
            </span>{" "}
          </h3>
        </div>
      )}
    </div>
  );
}
