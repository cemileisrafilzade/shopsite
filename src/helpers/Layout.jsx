import { Grid } from "@mui/material";
import React from "react";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";
import MainHeader from "../components/header/Main";

export default function Layout({ children }) {
  return (
    <Grid container columns={16}>
      <Grid item xs={16} sx={{ marginBottom: 5 }}>
        <MainHeader />
      </Grid>
      <Grid item xs={3} sx={{ padding: "60px 15px" }}>
        <FilterSidebar />
      </Grid>
      <Grid item xs={13}>
        {children}
      </Grid>
      <Grid item xs={16}>
        {/* <Footer /> */}
      </Grid>
    </Grid>
  );
}
