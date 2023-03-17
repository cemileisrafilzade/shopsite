import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FilterByPrices from "./filters/ByPrice";
import FilterByRating from "./filters/ByRating";
import FilterByCategories from "./filters/Categories";

export default function FilterSidebar() {
  return (
    <div>
      <FilterByCategories />
      <FilterByPrices />
      <FilterByRating />
    </div>
  );
}
