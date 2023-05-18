import * as React from "react";

import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function HeaderSearch() {
  const { products } = useContext(AppContext);
  const navigate = useNavigate();
  let productId;
  const searchProduct = (e) => {
    products.some((product) => {
      if (product.title === e.target.value) {
        productId = product.id;
      }
    });

    console.log(productId);
    if (productId) {
      navigate(`product-info/${productId}`);
    }
  };
  return (
    <Autocomplete
      sx={{
        width: 300,
        backgroundColor: "#fff",
        margin: "5px",
        borderRadius: "5px",
      }}
      options={products}
      autoHighlight
      getOptionLabel={(option) => option.title}
      onSelect={searchProduct}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search a product name"
          color="success"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
}
