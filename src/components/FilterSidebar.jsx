import { DeleteOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import ByFavCount from "./filters/ByFavCount";
import FilterByPrices from "./filters/ByPrice";
import FilterByRating from "./filters/ByRating";
import FilterByCategories from "./filters/Categories";

export default function FilterSidebar() {
  const [clear, setClear] = useState(false);
  const { setFilteredProducts, products } = useContext(AppContext);
  const clearFilters = () => {
    setFilteredProducts(products);
    setClear(true);
  };
  return (
    <div>
      <FilterByCategories />
      <FilterByPrices clear />
      <FilterByRating />
      <ByFavCount />
      <Button
        onClick={clearFilters}
        color="secondary"
        // size="medium"
        variant="outlined"
        sx={{ float: "right", margin: "10px" }}
        endIcon={<DeleteOutline />}
      >
        Clear all filters
      </Button>
    </div>
  );
}
