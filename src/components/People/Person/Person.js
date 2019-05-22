import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Person.css";
import classes from "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    console.log("[Person] rendering");
    return (
      <Auxiliary>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Logged In!</p> : <p>Please login...</p>
          }
        </AuthContext.Consumer>
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
          ref={this.inputRef}
        />
        <h1>Adjacent element</h1>
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, classes.Person);
