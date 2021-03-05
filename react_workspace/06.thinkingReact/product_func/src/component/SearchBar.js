import React from "react";
import { Input } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";

function SearchBar(props) {
  return (
    <div>
      <Input
        focus
        placeholder="Search..."
        value={props.filterText}
        onChange={event => props.handleFilterTextChange(event.tartget.value)}
      />
      <Checkbox
        toggle
        onChange={event => props.handleInStockChange(event.target.toggle)} //?
      />
    </div>
  );
}

export default SearchBar;
