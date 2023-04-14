import React from "react";
import {userIsRegistered} from "./App"
function Button(prop) {
  let display = "";
  userIsRegistered ? (display = "Login") : (display = "Register");
  return <button type={prop.type}>{display}</button>;
}

export default Button;
