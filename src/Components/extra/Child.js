import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "this is from the child component",
    };
    this.onsubmit = this.onsubmit.bind(this);
  }
  onsubmit() {
    const { dataCallback } = this.props;
    dataCallback(this.state.message);
  }
  render() {
    return (
      <div>
        <button onClick={this.onsubmit}>click</button>
      </div>
    );
  }
}

export default Child;
