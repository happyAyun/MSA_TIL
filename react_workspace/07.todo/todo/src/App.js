import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import ClearAll from "./component/ClearAll";
// import Todos from "./Todos";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      // todos: Todos,
      todos: [],
    };
  }

  changeText = text => {
    this.setState({
      inputText: text,
    });
  };

  addTodoList = () => {
    this.setState({
      todos: this.state.todos.concat(this.state.inputText),
    }); // list 추가
  };

  todoDeleteHandler = item => {
    const ind = this.state.todos.indexOf(item);
    this.setState({
      todos: this.state.todos.splice(ind, 1),
    });
  };

  // todoClear = () => {
  //   this.setState({
  //     todos: this.state.todos.splice(0),
  //   });
  // };

  render() {
    return (
      <div>
        <TodoInput
          changeText={this.changeText}
          addTodoList={this.addTodoList}
          inputText={this.state.inputText}
        />
        <TodoList
          todos={this.state.todos}
          todoDeleteHandler={this.todoDeleteHandler}
        />
        {/* <ClearAll todoClear={this.todoClear} /> */}
      </div>
    );
  }
}

export default App;
