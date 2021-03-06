import React from "react";
import { Input } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";

function SearchBar(props) {
  const {
    filterText,
    inStockOnly,
    handleFilterTextChange,
    handleInStockChange,
  } = props;

  return (
    <div>
      <Input
        focus
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={event => handleFilterTextChange(event.tartget.value)}
      />
      <Checkbox
        toggle
        checked={inStockOnly}
        onChange={event => handleInStockChange(event)}
      />
      &nbsp; Only show products in stock
    </div>
  );
}

export default SearchBar;
