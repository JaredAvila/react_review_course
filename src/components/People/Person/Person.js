import React, { Component } from "react";
import "./Person.css";
import classes from "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";

class Person extends Component {
  render() {
    console.log("[Person] rendering");
    return (
      <Auxiliary>
        <div className={classes.Person}>
          <p
            onClick={() => this.props.click("James Bond")}
            className={classes.people}
          >
            I'm {this.props.name} and I'm {this.props.age}
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            placeholder={this.props.name}
            className={classes.bold}
          />
        </div>
        <h1>Adjacent element</h1>
      </Auxiliary>
    );
  }
}

export default Person;
