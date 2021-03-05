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

  addList = () => {
    let todos = {};
    todos += this.state.inputText;
    this.setState(todos);
  };

  render() {
    return (
      <div>
        <TodoInput
          changeList={this.changeText}
          addList={this.addList}
          inputText={this.state.inputText}
        />
        <TodoList />
        <ClearAll />
      </div>
    );
  }
}

export default App;
