import React, { Component } from "react";
import SearchBar from "../view/SearchBar";
import ProductTable from "../container/ProductTable";
import { observer, inject } from "mobx-react";

@inject("ProductStore")
@observer
class FilterableProductTable extends Component {
  onChangeText = newText => {
    this.props.ProductStore.changeText(newText);
  };

  onChangeCheck = newCheck => {
    this.props.ProductStore.changeCheck(newCheck);
  };

  render() {
    const { filterText, inStockOnly, products } = this.props.ProductStore;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          handleFilterTextChange={this.onChangeText}
          handleInStockChange={this.onChangeCheck}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
