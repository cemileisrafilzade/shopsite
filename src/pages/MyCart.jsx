import { DeleteOutlineRounded } from "@mui/icons-material";
import {
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import "../styles/MyCart.scss";
import "../styles/main.scss";
import { Link } from "react-router-dom";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MyCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispacth = useDispatch();
  const deleteItem = (id) => {
    dispacth(cartActions.deleteItem(id));
  };
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="container">
      <div className="links">
        <Breadcrumbs separator="›">
          <Link to={"/"}>All products</Link>
          <Link className="active">Cart</Link>
        </Breadcrumbs>
      </div>
      <div className="wrapper">
        <h1>My Cart</h1>
        {cartItems.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          <div className="mainWrapper">
            <TableContainer>
              <Table className="table" stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Image</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Title</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Price</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Quantity</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Delete</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tbody">
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="imgContainer">
                        <img src={item.image} alt="" />
                      </TableCell>
                      <TableCell className="titleCell">{item.title}</TableCell>
                      <TableCell>$ {item.price}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell
                        onClick={() => deleteItem(item.id)}
                        className="delBtn"
                      >
                        <DeleteOutlineRounded color="error" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="totalContainer">
              <h3>
                Total amount :{" "}
                <span className="price">
                  ${parseFloat(totalAmount.toFixed(2))}
                </span>
              </h3>
              <p>taxes and shipping will calculate in checkout</p>
              <button>
                <Link>Continue Shopping</Link>
              </button>
              <button>
                <Link>Checkout</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
