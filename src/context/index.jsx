import React, { createContext, useEffect, useState } from "react";

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  const contextValues = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    loading,
  };
  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};
export const AppContext = createContext();
