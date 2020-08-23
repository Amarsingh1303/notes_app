import React, { Component } from "react";
// import Notes from "./Components/Notes";
import Header from "./Components/Header";
// import Local from "./Components/Local";
import Notes from "./Components/Notes";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Notes />
      </div>
    );
  }
}

export default App;
