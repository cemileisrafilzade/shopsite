import React, { createContext, useEffect, useState } from "react";

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  const [favIds, setFavIds] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    setLoading(true);
    // fetching all products
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });

    // fetching all users
    fetch("https://fakestoreapi.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
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
    favIds,
    setFavIds,
    users,
  };
  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};
export const AppContext = createContext();
