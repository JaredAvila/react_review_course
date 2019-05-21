import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import People from "../components/People/People";

class App extends Component {
  state = {
    people: [
      { id: "1", name: "Jared", age: 36 },
      { id: "2", name: "Natalie" },
      { id: "3", name: "Sophia", age: 5 },
      { id: "4", name: "Samuel", age: 2 }
    ],
    otherState: "some other stuff",
    showPeople: false
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    });
  };

  deletePersonHandler = index => {
    //create copy of state
    const people = [...this.state.people];
    //update copy
    people.splice(index, 1);
    //update state with new copy
    this.setState({
      people: people
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.people[personIndex] };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({
      people: people
    });
  };
  render() {
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title = {this.props.title}
          people={this.state.people}
          showPeople={this.state.showPeople}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
