import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);
  // console.log(product);
  return (
    <div style={{ width: "50%" }}>
      {loading ? (
        <>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "57%" }} />
          </Skeleton>
        </>
      ) : (
        <div>
          <img src={product.image} alt="" />

          <h1>{product.title}</h1>
          <h3>{product.price} $</h3>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
