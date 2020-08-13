import React, { Component } from "react";

class Sample2 extends Component {
  del = (num) => {
    const { dataCallBack } = this.props;
    dataCallBack(num);
    // console.log(num);
  };
  render() {
    const { boomin, boom } = this.props;
    return (
      <div>
        <h1>{boom}</h1>
        <button onClick={() => this.del(boom)} value={boomin}>
          delete
        </button>
      </div>
    );
  }
}

export default Sample2;
