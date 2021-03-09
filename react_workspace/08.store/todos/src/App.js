import InputTodo from "./container/InputTodo";
import ListTodos from "./container/ListTodos";
import ClearAll from "./container/ClearAll";
import React, { Component } from "react";
import Todos from "./board/Todos";
import listTodos from "./container/ListTodos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: Todos,
      // todos: [],
      inputText: "",
    };
  }

  inputTextChange = event => {
    this.setState({
      inputText: event.target.value,
    });
  };

  enterTodo = index => {
    this.setState({
      todos: this.state.todos.concat({
        index: index,
        todo: this.state.inputText,
      }),
    });
  };

  deleteTodo = delTodo => {
    // let idx = this.state.todos.indexOf(delTodo);
    this.state.todos.splice(delTodo, 1);
    this.setState({
      todos: this.state.todos,
    });
  };

  todosClear = () => {
    // for (let i = 0; i < this.state.todos.length; i++) {
    //   this.state.todos.splice(i, 1);
    // }
  };

  render() {
    return (
      <div>
        <InputTodo
          inputText={this.state.inputText}
          inputTextChange={this.inputTextChange}
          enterTodo={this.enterTodo}
        />
        <p />
        <p />
        <ListTodos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <p />
        <p />
        <ClearAll todosClear={this.todosClear} />
      </div>
    );
  }
}

export default App;
