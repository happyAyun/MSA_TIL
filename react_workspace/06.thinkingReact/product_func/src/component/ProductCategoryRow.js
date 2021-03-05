import React from "react";
import { Table } from "semantic-ui-react";

function ProductCategoryRow(props) {
  return <Table.Row>{props.category}</Table.Row>;
}

export default ProductCategoryRow;
