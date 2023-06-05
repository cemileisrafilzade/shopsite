import { Rating } from "@mui/material";
import Input from "../common/Input";
import React, { useContext } from "react";
import { AppContext } from "../../context";

export default function FilterByRating() {
  const { products, setFilteredProducts } = useContext(AppContext);

  const content = [
    {
      id: 1,
      text: <Rating readOnly value={1} />,
      disable: !products.filter(
        (product) => Math.round(product.rating.rate) === 1
      ).length,
      value: 1,
    },
    {
      id: 2,
      text: <Rating readOnly value={2} />,
      disable: !products.filter(
        (product) => Math.round(product.rating.rate) === 2
      ).length,
      value: 2,
    },
    {
      id: 3,
      text: <Rating readOnly value={3} />,
      disable: !products.filter(
        (product) => Math.round(product.rating.rate) === 3
      ).length,
      value: 3,
    },
    {
      id: 4,
      text: <Rating readOnly value={4} />,
      disable: !products.filter(
        (product) => Math.round(product.rating.rate) === 4
      ).length,
      value: 4,
    },
    {
      id: 5,
      text: <Rating readOnly value={5} />,
      disable: !products.filter(
        (product) => Math.round(product.rating.rate) === 5
      ).length,
      value: 5,
    },
  ];
  const label = "star count";
  const handleChange = (e) => {
    let rate = e.target.value;
    let filtered = products;
    // if (rate === 1) {
    //   filtered = products?.filter(
    //     (product) => Math.round(product.rating.rate) === 1
    //   );
    // } else if (rate === 2) {
    //   filtered = products?.filter(
    //     (product) => Math.round(product.rating.rate) === 2
    //   );
    // } else if (rate === 3) {
    //   filtered = products?.filter(
    //     (product) => Math.round(product.rating.rate) === 3
    //   );
    // } else if (rate === 4) {
    //   filtered = products?.filter(
    //     (product) => Math.round(product.rating.rate) === 4
    //   );
    // } else if (rate === 5) {
    //   filtered = products?.filter(
    //     (product) => Math.round(product.rating.rate) === 5
    //   );
    // }
    setFilteredProducts(filtered);
  };

  return <Input content={content} label={label} handleChange={handleChange} />;
}
