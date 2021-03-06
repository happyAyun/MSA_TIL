import React, { Component } from "react";

class displayList extends Component {
  render() {
    const { item, todoDeleteHandler } = this.props;
    return (
      <div>
        <li class="shadow">
          <i aria-hidden="true" class="checkBtn fa fa-check"></i>
          {item.todo}
          <span
            type="button"
            class="removeBtn"
            onClick={todoDeleteHandler({ item })}
          >
            <i aria-hidden="true" class="fa fa-trash-o"></i>
          </span>
        </li>
      </div>
    );
  }
}

export default displayList;
