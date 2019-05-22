import React, { Component } from "react";
import Person from "./Person/Person";

class People extends Component {
  state = { things: "and stuff" };
  static getDerivedStateFromProps(props, state) {
    console.log("[People] getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[People] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[People] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[People] compoenentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("[People] rendering");
    return this.props.people.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default People;
