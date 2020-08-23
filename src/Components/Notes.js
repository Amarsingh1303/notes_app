import React, { Component } from "react";
import Mid from "./Mid";
import shortid from "shortid";
class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: "",
      title: "",
      notesobj: [],
      showobj: [],
    };
    // this.changeNote = this.changeNote.bind(this);
    // this.clickHandle = this.clickHandle.bind(this);
    // this.changeTitle = this.changeTitle.bind(this);
    // this.handleDataCallback = this.handleDataCallback.bind(this);
  }
  changeNote = (e) => {
    this.setState({ note: e.target.value });
  };
  changeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  clickHandle = () => {
    const obj = {
      id: shortid.generate(),
      notetitle: this.state.title,
      notedesc: this.state.note,
    };
    const list = [...this.state.notesobj, obj];
    this.setState({ notesobj: list, note: "", title: "" });
    setTimeout(() => {
      localStorage.setItem("notes", JSON.stringify(this.state.notesobj));
    }, 1000);
    // if (this.state.isloading === false) {
    //   localStorage.setItem("notes", JSON.stringify(this.state.notesobj));
    //   console.log(list);
    // }
  };

  handleDataCallback = (id) => {
    // this.state.notesobj.splice(id - 1, id + 1);
    const changeArr = this.state.notesobj.filter((ele) => ele.id !== id);
    // console.log(changeArr);
    this.setState({
      notesobj: changeArr,
    });
    setTimeout(() => {
      localStorage.setItem("notes", JSON.stringify(this.state.notesobj));
    }, 1000);
  };
  componentDidMount() {
    // console.log("component did mount Notes");
    const arrobj = JSON.parse(localStorage.getItem("notes"));
    this.setState({ notesobj: arrobj });
    console.log(arrobj);
  }
  render() {
    return (
      <div className="container my-2">
        <h1>Welcome to the notes app</h1>
        {/* <input type="text" value={this.state.note} onChange={this.change} /> */}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="helpId"
            placeholder="Enter the Title Here"
            value={this.state.title}
            onChange={this.changeTitle}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="helpId"
            placeholder="Enter the Description or note Here"
            value={this.state.note}
            onChange={this.changeNote}
          />
        </div>
        <button className="btn btn-success" onClick={this.clickHandle}>
          ADD
        </button>
        <hr />

        <div className="container-fluid row my-2">
          {this.state.notesobj ? (
            this.state.notesobj.map((ele, index) => (
              <Mid
                key={index}
                title={ele.notetitle}
                desc={ele.notedesc}
                noteid={ele.id}
                index={index}
                dataCallback={this.handleDataCallback}
              />
            ))
          ) : (
            <h2 className="text-danger">Nothing to Show</h2>
          )}
        </div>
      </div>
    );
  }
}

export default Notes;
