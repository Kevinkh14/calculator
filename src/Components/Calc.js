import React, { Component } from "react";
import "../App.css";

class Calc extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="App">
        <div >
          <section className="formula">
            <button className="but" name ="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button className="but" name ="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button className="but" name ="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button className="but4" name ="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
            <button className="but" name ="4" onClick={e => this.props.onClick(e.target.name)}>4 </button>
            <button className="but" name ="5" onClick={e => this.props.onClick(e.target.name)}>5 </button>
            <button className="but" name ="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button className="but4" name ="*" onClick={e => this.props.onClick(e.target.name)}>X</button>
            <button className="but" name ="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button className="but" name ="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button className="but" name ="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button className="but4" name ="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
            <button className="but" name ="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button className="but" name ="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
            <button className="but" name ="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            <button className="but4" name ="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
            <button className="but2" name ="clear" onClick={e => this.props.onClick(e.target.name)}>clear</button>
          </section>
        </div>
      </div>
    );
  }
}

export default Calc;
