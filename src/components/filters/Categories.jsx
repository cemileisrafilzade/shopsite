import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/index";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FilterByCategories() {
  const { products, filteredProducts, setFilteredProducts } =
    useContext(AppContext);
  const [catName, setCatName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (filteredProducts.length) {
      setFilteredProducts(
        products.filter((product) =>
          event.target.value.includes(product.category)
        )
      );
    }
    setCatName(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if (!filteredProducts.length) {
      setFilteredProducts(products);
    }
  }, [handleChange, filteredProducts.length, products]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data));
  }, []);

  return (
    <div>
      <FormControl sx={{ margin: "55px 0px 10px 0 ", width: "100%" }}>
        <InputLabel id="demo-multiple-checkbox-label">category</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={catName}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={catName.indexOf(category) > -1} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
