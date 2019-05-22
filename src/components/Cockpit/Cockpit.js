import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit] useEffect");
  });

  const assignedClasses = [];

  if (props.people.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.people.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  let btnClass = "";

  if (props.showPeople) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className="people">{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle People
      </button>
    </div>
  );
};

export default Cockpit;
