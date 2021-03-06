import React, { Component } from "react";
import "../index.css";
class todoInput extends Component {
  render() {
    const { inputText, changeText, addTodoList } = this.props;
    return (
      <div className="inputBox shadow">
        <form>
          <input
            id="todoInput"
            type="text"
            placeholder="일정을 입력하세요"
            value={inputText}
            onChange={event => changeText(event)}
          />
          <button className="addContainer" onClick={() => addTodoList()}>
            <i aria-hidden="true" className="addBtn fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default todoInput;
