import { Favorite } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Rating,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

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
      <div className="links">
        <Breadcrumbs separator="›">
          <Link to={"/"}>All products</Link>
          <Link to={-1}>{product.category}</Link>
          <Link className="active">{product.title}</Link>
        </Breadcrumbs>
      </div>
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
              <IconButton
                // onClick={(e) => addFav(e)}
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="warning"
                // color={fav ? "error" : "default"}
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  right: 0,
                  top: -30,
                  transform: "translateY(50%)",
                }}
              >
                <Favorite />
              </IconButton>
              <h1>{product.title}</h1>
              <h3>{product.price} $</h3>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <h5>{product.rating.count}</h5>
              <Rating readOnly value={Math.round(product.rating.rate)} />
              <Button
                sx={{ m: 1, float: "right" }}
                variant="outlined"
                endIcon={<AddShoppingCartOutlinedIcon />}
              >
                {" "}
                Add to card{" "}
              </Button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default ProductInfo;
