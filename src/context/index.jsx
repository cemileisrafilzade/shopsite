import React, { createContext, useEffect, useState } from "react";

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValues = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
  };
  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};
export const AppContext = createContext();
