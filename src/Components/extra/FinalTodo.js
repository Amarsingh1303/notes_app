import React, { Component } from "react";

class FinalTodo extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={this.props.ondel}>del</button>
      </div>
    );
  }
}

export default FinalTodo;
