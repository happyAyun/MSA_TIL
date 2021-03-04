import React, { Component } from "react";

class InputTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element.",
    };
  }

  handleSubmit = event => {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InputTextarea;
