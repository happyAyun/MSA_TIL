import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class ClearAll extends Component {
  render() {
    const { todosClear } = this.props;
    return (
      <div>
        <Button primary onClick={todosClear()}>
          ClearAll
        </Button>
      </div>
    );
  }
}

export default ClearAll;
