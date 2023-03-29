import React, { useContext } from "react";
import { AppContext } from "../../context";
import Input from "../common/Input";
export default function ByFavCount() {
  const content = [
    { id: 1, value: 150, text: "less than 150" },
    { id: 2, value: 300, text: "150 - 350" },
    { id: 3, value: 350, text: "more than 350 " },
  ];
  const label = "favourite count";

  const { products, setFilteredProducts, filteredProducts, multiFilter } =
    useContext(AppContext);
  const handleChange = (event) => {
    let price = event.target.value;
    let filtered = [];
    if (price === 150) {
      filtered = products?.filter((product) => product.rating.count < 150);
    } else if (price === 300) {
      filtered = products?.filter(
        (product) => product.rating.count > 151 && product.rating.count < 350
      );
    } else if (price === 350) {
      filtered = products?.filter((product) => product.rating.count > 351);
    } else {
      filtered = products;
    }
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Input handleChange={handleChange} content={content} label={label} />
    </div>
  );
}
