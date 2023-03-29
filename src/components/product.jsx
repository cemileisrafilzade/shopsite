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
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

function Product({ product }) {
  const [rate, setRate] = useState(4);
  const [fav, setFav] = useState(false);
  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const { loading } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    setRate(Math.round(product.rating.rate));
  }, [product]);

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  const addFav = (e) => {
    e.stopPropagation();
    setFav(!fav);
    if (!fav) {
      setState({
        open: true,
      });
    }
  };
  return (
    <Card
      onClick={() => navigate(`product-info/${product.id}`)}
      xs={2}
      sm={4}
      md={4}
      sx={{ width: 325, m: 2, cursor: "pointer" }}
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
              color={fav ? "error" : "default"}
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
            {product.title}
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

              {/* <h5>{product.category}</h5> */}
              {/* <p>{product.description}</p> */}
            </span>
            <Divider />
            <Button
              sx={{ m: 1, float: "right" }}
              variant="outlined"
              endIcon={<AddShoppingCartOutlinedIcon />}
            >
              {" "}
              Add to card{" "}
            </Button>
          </CardContent>
          <Snackbar
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={state.open}
            onClose={handleClose}
          >
            <Alert>Added to your favourites</Alert>
          </Snackbar>
        </>
      )}
    </Card>
  );
}

export default Product;
