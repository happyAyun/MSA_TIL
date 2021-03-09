import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
class ShowTodos extends Component {
  render() {
    const { todo, deleteTodo } = this.props;
    return (
      <div>
        <Message header={todo.todo} />
        <Button secondary onClick={todo => deleteTodo(todo)}>
          삭제
        </Button>
      </div>
    );
  }
}

export default ShowTodos;
