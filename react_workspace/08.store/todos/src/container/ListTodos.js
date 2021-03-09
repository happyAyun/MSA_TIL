import React, { Component } from "react";
import ShowTodos from "../view/ShowTodos";
class ListTodos extends Component {
  render() {
    const { todos, deleteTodo } = this.props;
    const list = todos.map(todo => {
      return <ShowTodos key={todo.index} todo={todo} deleteTodo={deleteTodo} />;
    });
    return <div>{list}</div>;
  }
}

export default ListTodos;
