import React, { Component } from "react";
import "../index.css";
class ClearAll extends Component {
  render() {
    const { todoClear } = this.props;
    return (
      <div className="clearAllContainer">
        <span className="clearAllBtn" onClick={todoClear()}>
          Clear All
        </span>
      </div>
    );
  }
}

export default ClearAll;
