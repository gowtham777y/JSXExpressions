import React from "react";
import ReactDOM from "react-dom";

const firstName = "Gowtham";
const lastName = "Yarlagadda";
const number = 1;

ReactDOM.render(
  <div>
    <h1>Hello {firstName + " " + lastName}!</h1>
    <p>My lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
