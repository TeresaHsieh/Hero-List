console.log("hi");

import React from "react";
import ReactDOM from "react-dom";

let element = <h3>hello react</h3>;

export default class App extends React.Component {
  state = {
    name: "Ryu",
    age: 30
  };
  render() {
    return (
      <div>
        <p>
          {" "}
          My name is {this.state.name} and I am {this.state.age}.{" "}
        </p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));