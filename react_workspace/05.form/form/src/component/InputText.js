import React, { Component } from "react";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };
  }

  handleSubmit = event => {
    alert(this.state.value);
    event.preventDefault();
  };

  handleChange = e => {
    // 이벤트 객체가 함께 넘겨져 옴. -> JS 문법 : MDN 사이트
    this.setState({
      value: e.target.value, // document.form.name.value => 입력하는 순간 브라우저가 등록되어있는 핸들러의 이벤트 객체를 담아서 호출하게 되어있음. target객체를 넘겨오므로, 그곳의 value값을 사용함.
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputText;
