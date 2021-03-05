import React, { Component } from "react";

class todoInput extends Component {
  render() {
    const { inputText, changeText, addList } = this.props;
    return (
      <div class="inputBox shadow">
        <form>
          <input
            id="todoInput"
            type="text"
            placeholder="일정을 입력하세요"
            value={inputText}
            onChange={event => changeText(event.target.value)}
          />
          <span class="addContainer" onClick={addList()}>
            <i aria-hidden="true" class="addBtn fa fa-plus"></i>
          </span>
        </form>
      </div>
    );
  }
}

export default todoInput;
