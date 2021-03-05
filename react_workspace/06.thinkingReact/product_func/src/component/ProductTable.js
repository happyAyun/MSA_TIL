import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { Icon, Table } from "semantic-ui-react";

function ProductTable(props) {
  const ProductList = [];
  let lastCategory = null;

  props.products.forEach(product => {
    if (product.name.indexOf(props.filterText) === -1) {
      return;
    }
    if (props.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      ProductList.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    ProductList.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>stocked</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{ProductList}</Table.Body>
    </Table>
  );
}

export default ProductTable;
