import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import ClearAll from "./component/ClearAll";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      todos: {},
    };
  }

  changeText = listText => {
    this.setState({
      inputText: listText,
    });
  };

  addList = (list, index) => {
    // let todos = {};
    list += { todo: this.state.inputText, index: index };
    this.setState(list);
  };

  todoDeleteHandler = (list, item) => {};

  todoClear = list => {
    list = [];
  };
  render() {
    let list = [];
    return (
      <div>
        <TodoInput
          changeList={this.changeText}
          addList={this.addList(list)}
          inputText={this.state.inputText}
        />
        <TodoList list={list} todoDeleteHandler={this.todoDeleteHandler} />
        <ClearAll list={list} todoClear={this.todoClear} />
      </div>
    );
  }
}

export default App;
