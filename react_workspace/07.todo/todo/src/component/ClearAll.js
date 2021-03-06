import React, { Component } from "react";

class ClearAll extends Component {
  render() {
    const { list, todoClear } = this.props;
    return (
      <div class="clearAllContainer">
        <span class="clearAllBtn" onClick={todoClear(list)}>
          Clear All
        </span>
      </div>
    );
  }
}

export default ClearAll;
