import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit] useEffect as componentDidMount");
    setTimeout(() => {
      alert("Cockpit is mounted");
    }, 2000);
    return () => {
      console.log("[Cockpit] useEffect unmount cleanup");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit] useEffect only when props.people changes");
    setTimeout(() => {
      alert("People Changed!");
    }, 2000);
    return () => {
      console.log("[Cockpit] useEffect People changed cleanup");
    };
  }, [props.peopleLength]);
  useEffect(() => {
    console.log("[Cockpit] useEffect triggers everytime Cockpit is rendered");
    setTimeout(() => {
      alert("Cockpit rendered");
    }, 2000);
    return () => {
      console.log("[Cockpit] useEffect Cockpit rendered cleanup");
    };
  });

  const assignedClasses = [];

  if (props.peopleLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.peopleLength <= 1) {
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

export default React.memo(Cockpit);
