import React, { useContext } from "react";
import { AppContext } from "../../context";
import Input from "../common/Input";

export default function FilterByPrices() {
  const { products, setFilteredProducts } = useContext(AppContext);

  const content = [
    { id: 1, value: 100, text: "0 - 100 $" },
    { id: 2, value: 500, text: "100 - 500 $" },
    { id: 3, value: 1000, text: "more than 500 $" },
  ];
  const label = "price $";
  const handleChange = (event) => {
    let price = event.target.value;
    let filtered = [];
    if (price === 100) {
      filtered = products?.filter((product) => product.price < 100);
    } else if (price === 500) {
      filtered = products?.filter(
        (product) => product.price > 101 && product.price < 500
      );
    } else if (price === 1000) {
      filtered = products?.filter((product) => product.price > 501);
    } else {
      filtered = products;
    }
    setFilteredProducts(filtered);
  };

  return <Input content={content} label={label} handleChange={handleChange} />;
}
