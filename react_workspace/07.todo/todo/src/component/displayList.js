import React, { Component } from "react";

class DisplayList extends Component {
  render() {
    const { todo, todoDeleteHandler } = this.props;
    return (
      <div>
        <li className="shadow">
          <i aria-hidden="true" className="checkBtn fa fa-check"></i>
          {todo.todo}
          <button className="removeBtn" onClick={todoDeleteHandler({ todo })}>
            <i aria-hidden="true" className="fa fa-trash-o"></i>
          </button>
        </li>
      </div>
    );
  }
}

export default DisplayList;
