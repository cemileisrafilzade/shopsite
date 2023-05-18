// import { Skeleton } from "@mui/material";
import React, { useContext } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/productCard";
import { AppContext } from "../context";
import "../styles/main.scss";
function Products() {
  const { filteredProducts } = useContext(AppContext);
  return (
    <div style={{ display: "flex", padding: 5 }}>
      <div className="filterBox">
        <FilterSidebar />
      </div>
      <div className="productList">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
