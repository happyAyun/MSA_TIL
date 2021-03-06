import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable(props) {
  const { products } = props;
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState("false");

  const handleFilterTextChange = event => {
    setFilterText(event.target.value);
  };

  const handleInStockChange = stocked => {
    setInStockOnly(stocked); //
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        handleFilterTextChange={handleFilterTextChange}
        handleInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
