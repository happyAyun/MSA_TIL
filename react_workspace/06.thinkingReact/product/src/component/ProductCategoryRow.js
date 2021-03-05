import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props; // 변수가 있어야 함.
    // const c = this.props.category; = 내가 변수의 이름을 지정할 수 있음.
    return (
      <tr colSpan="2">
        <th>{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
