import * as React from "react";

import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

export default function HeaderSearch() {
  const { products } = useContext(AppContext);
  const location = useLocation().pathname;
  const textFieldRef = useRef();
  const navigate = useNavigate();
  let productId = null;
  const searchProduct = (e) => {
    // e.preventDefault();
    products.some((product) => {
      if (product.title === e.target.value) {
        return (productId = product.id);
      }
      return false;
    });

    if (productId) {
      // setFilteredProducts(searchedProducts);
      navigate(`product-info/${productId}`);
    }
  };
  // useEffect(() => {
  //   console.log(textFieldRef.current.value);
  //   // textFieldRef.current.value = "sdkfmsdlfkdfsfgmsd;k red";
  //   // textFieldRef.current.focus();
  // }, [location]);
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
          // inputRef={textFieldRef}
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
