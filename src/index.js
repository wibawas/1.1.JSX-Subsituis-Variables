import React from "react";
import ReactDOM from "react-dom";

const name = "John";
const age = 27;
const city = "semarang";
const isMarried = false;

ReactDOM.render(
  <div>
    <h1>HELLO {name} !!!</h1>
    <ul>
      <li>Your age is {age}</li>
      <li>Live in {city}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
