import React, { Component } from "react";
import displayList from "./displayList";

class TodoList extends Component {
  render() {
    const { list, todoDeleteHandler } = this.props;
    const itemList = list.map(item => {
      return <displayList item={item} todoDeleteHandler={todoDeleteHandler} />;
    });

    return (
      <section>
        <ul id="todoList">{itemList}</ul>
        <displayList />
      </section>
    );
  }
}

export default TodoList;
