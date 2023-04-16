import React, {useState} from "react";
import {userIsRegistered} from "./App"
function Button(prop) {
  const [touch, touchFunction]= useState(false);
  function onOver(){
    touchFunction(true);
    console.log("Over");  // it will not show when console is open. 
  }

  function onOut(){
    touchFunction(false);
  }

  let display = "";
  userIsRegistered ? (display = "Login") : (display = "Register");
  return <button style={{backgroundColor: touch ? "black" : "white"}} onMouseOver={onOver} onMouseOut={onOut} type={prop.type}>{display}</button>;
}

export default Button;
