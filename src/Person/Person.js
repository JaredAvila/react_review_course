import React from "react";

const Person = props => {
  return (
    <div>
      <p onClick={() => props.click("James Bond")}>
        I'm {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} placeholder={props.name} />
    </div>
  );
};

export default Person;
