import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class InputTodo extends Component {
  render() {
    const { inputText, inputTextChange, enterTodo } = this.props;
    return (
      <Form warning>
        <Form.Input
          label="Todo"
          placeholder="todo"
          value={inputText}
          onChange={event => inputTextChange(event)}
        />
        <Button onClick={index => enterTodo(index)}>일정 등록</Button>
      </Form>
    );
  }
}

export default InputTodo;
