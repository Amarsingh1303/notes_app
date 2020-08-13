import React, { Component } from "react";

export class Local extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "amar",
      notesobj: [
        {
          id: 1,
          name: "lamborghini",
          speed: "320",
        },
        {
          id: 2,
          name: "buggati",
          speed: "420",
        },
        {
          id: 3,
          name: "Mustang",
          speed: "280",
        },
        {
          id: 4,
          name: "mercedes",
          speed: "340",
        },
      ],
    };
  }
  clear = () => {
    localStorage.clear();
  };
  get = () => {
    const value = localStorage.getItem("name2");
    console.log(value);
  };
  getobj = () => {
    const valueArr = localStorage.getItem("notes");
    console.log(valueArr);
  };
  getobjr = () => {
    const valueArr = JSON.parse(localStorage.getItem("notes"));
    console.log(valueArr);
  };

  componentDidMount() {
    // localStorage.setItem("name", "Harry");
    localStorage.setItem("name2", "Amarsingh");
    localStorage.setItem("notes", JSON.stringify(this.state.notesobj));
    // localStorage.clear();
  }
  render() {
    return (
      <div>
        <h1>this is Local Component</h1>
        <button onClick={this.clear}>clear</button>
        <button onClick={this.get}>Get</button>
        <button onClick={this.getobj}>Getobj</button>
        <button onClick={this.getobjr}>GetobjR</button>
      </div>
    );
  }
}

export default Local;
