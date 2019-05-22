import React, { PureComponent } from "react";
import Person from "./Person/Person";

class People extends PureComponent {
  state = { things: "and stuff" };
  static getDerivedStateFromProps(props, state) {
    console.log("[People] getDerivedStateFromProps");
    return state;
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("[People] shouldComponentUpdate");
  //     if (nextProps.people !== this.props.people) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[People] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[People] compoenentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[People] componentWillUnmount");
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
