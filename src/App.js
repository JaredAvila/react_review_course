import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Jared", age: 36 },
      { name: "Natalie", age: 32 },
      { name: "Sophia", age: 5 },
      { name: "Samuel", age: 2 }
    ],
    other: "Other Stuff"
  };

  switchNameHandler = name => {
    this.setState({
      people: [
        { name: name, age: 36 },
        { name: "Natalie", age: 32 },
        { name: "Sophia", age: 5.5 },
        { name: "Samuel", age: 2.5 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      people: [
        { name: "Jared", age: 36 },
        { name: event.target.value, age: 32 },
        { name: "Sophia", age: 5 },
        { name: "Samuel", age: 2 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React component</h1>
        <button onClick={this.switchNameHandler.bind(this, "Billy")}>
          {" "}
          {/* the more efficient way of doing it. As opposed to annon arrow func */}
          Switch Name
        </button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this)}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
        />
        <Person
          name={this.state.people[3].name}
          age={this.state.people[3].age}
        />
      </div>
    );
  }
}

export default App;
