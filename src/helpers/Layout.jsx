import { Grid } from "@mui/material";
import React from "react";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";
import MainHeader from "../components/header/Main";

export default function Layout({ children }) {
  return (
    <Grid
      container
      columns={16}
      // gap={12}
    >
      <Grid item xs={16}>
        <MainHeader />
      </Grid>
      <Grid item xs={16}>
        {children}
      </Grid>
      <Grid item xs={16}>
        {/* <Footer /> */}
      </Grid>
    </Grid>
  );
}
