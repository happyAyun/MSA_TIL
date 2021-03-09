import FilterableProductTable from "./container/FilterableProductTable";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
@inject("ProductStore")
@observer
class App extends Component {
  render() {
    return <FilterableProductTable />;
  }
}

export default App;
