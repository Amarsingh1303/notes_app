// import React, { Component } from "react";
// import FinalForm from "./FinalForm";
// import FinalTodo from "./FinalTodo";

// export class FinalList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notesarr: [],
//     };
//     this.handleCallBack = this.handleCallBack.bind(this);
//     this.handleDel = this.handleDel.bind(this);
//   }
//   handleCallBack(todo) {
//     const list = [...this.state.notesarr, todo];
//     this.setState({ notesarr: list });
//   }
//   handleDel(id) {
//     this.setState((state) => {
//       notesarr = state.notesarr.filter;
//     });
//   }

//   render() {
//     // console.log(this.state.notesarr);
//     return (
//       <div>
//         <FinalForm dataCallback={this.handleCallBack} />
//         {this.state.notesarr.map((ele) => {
//           <FinalTodo
//             key={ele.id}
//             name={ele.new}
//             ondel={() => this.handleDel(ele.id)}
//           />;
//         })}
//         {/* {this.state.notesarr.map((ele, index) => (
//           <div key={index}>
//             {ele.id} {ele.new}
//           </div>
//         ))} */}
//       </div>
//     );
//   }
// }

// export default FinalList;
