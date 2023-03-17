import styled from "@emotion/styled";
import { Grid, Paper, Skeleton } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Product from "../components/product";
import { AppContext } from "../context";

function Products({}) {
  const { filteredProducts } = useContext(AppContext);
  return (
    <Grid
      container
      sx={{ padding: 5 }}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Grid>
  );
}

export default Products;
