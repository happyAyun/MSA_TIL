import React, { Component } from "react";

class ClearAll extends Component {
  render() {
    return (
      <div class="clearAllContainer">
        <span class="clearAllBtn" onclick="todoClear()">
          Clear All
        </span>
      </div>
    );
  }
}

export default ClearAll;
