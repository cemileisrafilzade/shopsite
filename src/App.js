import "./App.css";
import { useEffect, useState } from "react";
import Products from "./pages/Products";
import { Box, Grid } from "@mui/material";
import { AppContextProvider } from "./context";
import Layout from "./helpers/Layout";

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <Box className="App">
          <Products />
        </Box>
      </Layout>
    </AppContextProvider>
  );
}

export default App;
