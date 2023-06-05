import { Favorite } from "@mui/icons-material";
import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Skeleton,
  Snackbar,
} from "@mui/material";

import React, { useContext, useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.stopPropagation();
    setCartState({ open: true });
    dispatch(
      cartActions.addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        rate: rate,
        rateCount: product.rating.count,
      })
    );
  };

  const [rate, setRate] = useState(4);
  const [fav, setFav] = useState(false);

  const [favState, setFavState] = React.useState({
    open: false,
    Transition: Slide,
  });
  const [cartState, setCartState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const { loading, setFavIds, favIds } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    setRate(Math.round(product.rating.rate));
  }, [product]);

  const handleCloseSnackBar = () => {
    setFavState({
      ...favState,
      open: false,
    });
    setCartState({
      ...cartState,
      open: false,
    });
  };

  const addFav = (e) => {
    setFav(!fav);
    // console.log(fav);
    e.stopPropagation();
    if (!fav) {
      setFavState({
        open: true,
      });
      if (!favIds.includes(product.id)) {
        let temp = [];
        temp.push(product.id);
        setFavIds([...favIds, ...temp]);
        localStorage.setItem("favIds", JSON.stringify([...favIds, ...temp]));
      }
    } else if (fav) {
      if (favIds.includes(product.id)) {
        setFavIds(favIds.filter((id) => id !== product.id));
        localStorage.setItem(
          "favIds",
          JSON.stringify(favIds.filter((id) => id !== product.id))
        );
      }
    }
  };
  useEffect(() => {
    const storedFavIds = JSON.parse(localStorage.getItem("favIds"));
    if (storedFavIds) {
      setFavIds(storedFavIds);
    }
  });
  const location = useLocation();

  // console.log(favIds.some((id) => id === 1));
  return (
    <Card
      onClick={() => navigate(`/product-info/${product.id}`)}
      xs={2}
      sm={4}
      md={4}
      sx={{
        width: 325,
        m: 2,
        height: 400,
        cursor: "pointer",
      }}
    >
      {loading ? (
        <>
          <Skeleton width={320} height={360} />
        </>
      ) : (
        <>
          <CardActionArea sx={{ position: "relative", zIndex: 1 }}>
            <CardMedia
              sx={{
                height: 194,
                objectFit: "contain",
                margin: "10px",
              }}
              component="img"
              image={product.image}
            />

            <IconButton
              onClick={(e) => addFav(e)}
              aria-label="Like minimal photography"
              size="md"
              variant="solid"
              color={
                favIds.some((id) => id === product.id) ? "error" : "default"
              }
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: 0,
                top: -15,
                transform: "translateY(50%)",
              }}
            >
              <Favorite />
            </IconButton>
          </CardActionArea>
          <CardContent key={product.id}>
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {product.title}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5>{product.price} $</h5>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  fontSize: "13px",
                }}
              >
                <Rating readOnly value={rate} />
                <p>{product.rating.count}</p>
              </span>
            </span>
            {/* <Divider /> */}
            <Button
              sx={{ m: 1, float: "right" }}
              variant="outlined"
              endIcon={<AddShoppingCartOutlinedIcon />}
              onClick={addToCart}
            >
              {" "}
              Add to card{" "}
            </Button>
          </CardContent>
          {!location.pathname.includes("fav") ? (
            <Snackbar
              autoHideDuration={2000}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={favState.open}
              onClose={handleCloseSnackBar}
            >
              <Alert>Added to your favourites</Alert>
            </Snackbar>
          ) : (
            ""
          )}
        </>
      )}
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={cartState.open}
        onClose={handleCloseSnackBar}
      >
        <Alert>Added to your Cart</Alert>
      </Snackbar>
    </Card>
  );
}

export default ProductCard;
