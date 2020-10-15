import React, { Component } from "react";
import Calc from "./Components/Calc";
import Output from "./Components/Output";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "clear") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var check = "";
    if (this.state.result.includes("--")) {
      check = this.state.result.replace("--", "+");
    } else {
      check = this.state.result;
    }

    try {
      this.setState({
        result: (eval(check) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div className="App">
        <div className = "calc">
        <Output result={this.state.result} />
        <Calc onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
