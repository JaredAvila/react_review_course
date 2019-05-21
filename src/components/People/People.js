import React from "react";
import Person from "./Person/Person";

const People = props =>
  props.people.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
      />
    );
  });

export default People;
