import { Container, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/main.scss";
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
  return (
    <div className="container">
      {loading ? (
        <>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "57%" }} />
          </Skeleton>
        </>
      ) : (
        <Container maxWidth="lg">
          <div className="productInfo">
            <img src={product.image} alt="" />
            <div className="content">
              <h1>{product.title}</h1>
              <h3>{product.price} $</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default ProductInfo;
