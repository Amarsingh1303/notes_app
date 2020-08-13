import React, { Component } from "react";
import shortid from "shortid";
export class FinalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({ new: event.target.value });
  }
  handleSubmit() {
    // console.log(this.state.new);
    this.props.dataCallback({
      id: shortid.generate(),
      new: this.state.new,
    });

    this.setState({ new: "" });
  }

  render() {
    return (
      <div>
        <input value={this.state.new} onChange={this.handleInput} />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

export default FinalForm;
