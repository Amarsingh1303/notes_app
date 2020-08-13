import React, { Component } from "react";
import Sample2 from "./Sample2";
class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newValue: "",
      valueArr: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDataCallBack = this.handleDataCallBack.bind(this);
  }
  handleInput(e) {
    this.setState({ newValue: e.target.value });
  }

  handleClick() {
    const listarr = [...this.state.valueArr, this.state.newValue];
    this.setState({
      valueArr: listarr,
      newValue: "",
    });
    console.log(listarr);
  }

  handleDataCallBack(number) {
    console.log(number);
    const changeArr = this.state.valueArr.filter((num) => num != number);
    // console.log(changeArr);
    this.setState({
      valueArr: changeArr,
    });
    // this.state.valueArr.splice(number, number);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newValue}
          onChange={this.handleInput}
        />
        <button onClick={this.handleClick}>Click To add</button>
        {this.state.valueArr.map((ele, index) => (
          <Sample2
            key={index}
            boom={ele}
            boomin={index}
            dataCallBack={this.handleDataCallBack}
          />
        ))}
      </div>
    );
  }
}

export default Sample;
