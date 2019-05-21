import React from "react";
import "./Person.css";
import classes from "./Person.css";

const Person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={() => props.click("James Bond")} className={classes.people}>
        I'm {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        placeholder={props.name}
        className={classes.bold}
      />
    </div>
  );
};

export default Person;
