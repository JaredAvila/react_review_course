import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleRef = useRef(null);

  useEffect(() => {
    toggleRef.current.click();
    console.log("[Cockpit] useEffect as componentDidMount");
  }, []);
  // useEffect(() => {
  //   console.log("[Cockpit] useEffect only when props.people changes");
  //   setTimeout(() => {
  //     alert("People Changed!");
  //   }, 2000);
  //   return () => {
  //     console.log("[Cockpit] useEffect People changed cleanup");
  //   };
  // }, [props.peopleLength]);
  // useEffect(() => {
  //   console.log("[Cockpit] useEffect triggers everytime Cockpit is rendered");
  //   setTimeout(() => {
  //     alert("Cockpit rendered");
  //   }, 2000);
  //   return () => {
  //     console.log("[Cockpit] useEffect Cockpit rendered cleanup");
  //   };
  // });

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
      <button ref={toggleRef} className={btnClass} onClick={props.clicked}>
        Toggle People
      </button>
      <AuthContext.Consumer>
        {context => (
          <button onClick={context.login}>
            {context.authenticated ? "Logout" : "Login"}
          </button>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
