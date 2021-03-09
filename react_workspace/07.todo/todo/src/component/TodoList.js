import React, { Component } from "react";
import DisplayList from "./DisplayList";

class TodoList extends Component {
  render() {
    const { todos, todoDeleteHandler } = this.props;
    const itemList = todos.map(todo => {
      return <DisplayList todo={todo} todoDeleteHandler={todoDeleteHandler} />;
    });
    return (
      <section>
        <ul id="todoList">{itemList}</ul>
        {itemList}
      </section>
    );
  }
}

export default TodoList;
