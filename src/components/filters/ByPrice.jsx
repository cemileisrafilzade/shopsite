import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

export default function FilterByPrices() {
  const { products, setFilteredProducts, filteredProducts } =
    useContext(AppContext);
  const [price, setPrice] = useState("");

  const handleChange = (event) => {
    const selectedPrice = event.target.value;
    setPrice(selectedPrice);
    let filtered = [];
    if (selectedPrice === 100) {
      filtered = filteredProducts.filter(
        (product) => product.price >= 0 && product.price <= 100
      );
    } else if (selectedPrice === 500) {
      filtered = filteredProducts.filter(
        (product) => product.price > 100 && product.price <= 500
      );
    } else if (selectedPrice === 1000) {
      filtered = filteredProducts.filter((product) => product.price > 500);
    } else {
      filtered = products;
    }
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    if (!filteredProducts.length) {
      setFilteredProducts(products);
    }
  }, [handleChange]);
  return (
    <FormControl sx={{ margin: "35px 0px", width: "100%" }}>
      <InputLabel id="demo-simple-select-label">Price $</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={price}
        input={<OutlinedInput label="Category" />}
        label="price"
        onChange={handleChange}
        defaultValue={"all"}
      >
        <MenuItem value="all">all</MenuItem>
        <MenuItem value={100}>0 - 100 $</MenuItem>
        <MenuItem value={500}>100 - 500 $</MenuItem>
        <MenuItem value={1000}>more than 500 $</MenuItem>
      </Select>
    </FormControl>
  );
}
