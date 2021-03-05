import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const { name, price, stocked } = this.props.product;
    return (
      <tr>
        {stocked ? (
          <td>{name}</td>
        ) : (
          <td>
            <span style={{ color: "red" }}>{name}</span>
          </td>
        )}
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
