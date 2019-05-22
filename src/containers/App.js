import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import People from "../components/People/People";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] constructor");
  }

  state = {
    people: [
      { id: "1", name: "Jared", age: 36 },
      { id: "2", name: "Natalie" },
      { id: "3", name: "Sophia", age: 5 },
      { id: "4", name: "Samuel", age: 2 }
    ],
    otherState: "some other stuff",
    showPeople: false,
    showCockpit: true,
    loggedIn: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App] getDerivedStateFromProps", state, props);
    return state;
  }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App] componentDidUpdate");
  }

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

  loginHandler = () => {
    let check = this.state.loggedIn;
    this.setState({ loggedIn: !check });
  };

  render() {
    console.log("[App] render");
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
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.loggedIn,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              peopleLength={this.state.people.length}
              showPeople={this.state.showPeople}
              clicked={this.togglePeopleHandler}
            />
          ) : null}
          {people}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
