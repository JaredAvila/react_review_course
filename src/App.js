import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "green",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      transition: "all 250ms ease"
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    let classes = [];

    if (this.state.people.length <= 2) {
      classes.push("red");
    }

    if (this.state.people.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React component</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {people}
      </div>
    );
  }
}

export default App;
