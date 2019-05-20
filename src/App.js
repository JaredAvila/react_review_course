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
    otherState: "some other stuff",
    showPeople: false
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

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React component</h1>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {this.state.showPeople ? (
          <div>
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
        ) : null}
      </div>
    );
  }
}

export default App;
