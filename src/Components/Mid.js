import React, { Component } from "react";
import { Card } from "react-bootstrap";
class Mid extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  deleteNote = (id) => {
    const { dataCallback } = this.props;
    dataCallback(id);
  };
  componentWillUnmount() {
    console.log("component-will-unmount");
  }
  componentDidMount() {
    console.log("component did mount Mid");
  }
  render() {
    const { title, desc, noteid, index } = this.props;
    return (
      <div className="my-2 mx-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              {index + 1}. {title}
            </Card.Title>
            <Card.Text>{desc}</Card.Text>
            {/* <Button variant="primary">Delete</Button> */}
            <button
              className="btn btn-primary"
              onClick={() => this.deleteNote(noteid)}
            >
              {" "}
              Delete Note
            </button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Mid;
