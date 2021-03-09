// import { observe, inject } from "mobx";
import React, { Component } from "react";
import ProductCategoryRow from "../view/ProductCategoryRow";
import ProductRow from "../view/ProductRow";

// @inject("ProductStore")
// @observe
class ProductTable extends Component {
  render() {
    const { products, filterText, inStockOnly } = this.props;
    const productList = [];
    let lastCategory = null;

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        productList.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      productList.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productList}</tbody>
      </table>
    );
  }
}

export default ProductTable;
