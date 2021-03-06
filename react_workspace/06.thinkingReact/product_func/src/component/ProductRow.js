import React from "react";
import { Table } from "semantic-ui-react";

function ProductRow(props) {
  const { name, price, stocked } = props;
  return (
    <Table.Row>
      {stocked ? (
        <Table.HeaderCell>{name}</Table.HeaderCell>
      ) : (
        <Table.HeaderCell>
          <span style={{ color: "red" }}>{name}</span>
        </Table.HeaderCell>
      )}
      <Table.HeaderCell>{price}</Table.HeaderCell>
      <Table.HeaderCell>{stocked}</Table.HeaderCell>
    </Table.Row>
  );
}

export default ProductRow;
