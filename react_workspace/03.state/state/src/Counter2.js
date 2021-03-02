import React, { Component } from "react";

class Counter2 extends Component {
  // 변경데이터 사용 : state
  // state : constructor 초기화
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    // state 데이터 변경 : setState
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter : {this.state.count} </h1>
        <button onClick={this.increase}> + </button>
        <button onClick={this.decrease}> - </button>
      </div>
    );
  }
}

export default Counter2;
