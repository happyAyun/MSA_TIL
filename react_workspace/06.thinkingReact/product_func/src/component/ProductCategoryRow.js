import React from "react";
import { Table } from "semantic-ui-react";

function ProductCategoryRow(props) {
  const { category } = props;
  return <Table.Row>{category}</Table.Row>;
}

export default ProductCategoryRow;
