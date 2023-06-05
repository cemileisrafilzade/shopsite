import { Favorite } from "@mui/icons-material";
import {
  Alert,
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Rating,
  Skeleton,
  Snackbar,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "../styles/main.scss";
import { AppContext } from "../context";
import ProductCard from "../components/productCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import Slide from "@mui/material/Slide";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [openSnack, setOpenSnack] = React.useState({
    open: false,
    Transition: Slide,
  });
  const { products } = useContext(AppContext);
  const similarProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const dispatch = useDispatch();
  const handleCloseSnack = () => {
    setOpenSnack({ ...openSnack, open: false });
  };
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

  const addToCart = () => {
    setOpenSnack({ open: true });
    dispatch(
      cartActions.addItem({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rate: Math.round(product.rating.rate),
        rateCount: product.rating.count,
      })
    );
  };
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
              <h4>{product.category}</h4>
              <p>{product.description}</p>
              <h5>
                <span>
                  <Rating readOnly value={Math.round(product.rating.rate)} />
                </span>
                {product.rating.count}
              </h5>
              <div className="addCart">
                <h2>{product.price} $</h2>

                <Button
                  sx={{ m: 1, float: "right" }}
                  variant="outlined"
                  endIcon={<AddShoppingCartOutlinedIcon />}
                  onClick={addToCart}
                >
                  {" "}
                  Add to card{" "}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      )}

      <h3>You might also like</h3>
      <div className="similars">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnack.open}
        onClose={handleCloseSnack}
      >
        <Alert>Added to your Cart</Alert>
      </Snackbar>
    </div>
  );
}

export default ProductInfo;
