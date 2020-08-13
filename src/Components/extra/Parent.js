import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
    this.handleDataCallback = this.handleDataCallback.bind(this);
  }

  handleDataCallback(msgc) {
    this.setState({ message: msgc });
    console.log(msgc);
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <p>message from child is := {message}</p>
        <Child dataCallback={this.handleDataCallback} />
      </div>
    );
  }
}

export default Parent;
