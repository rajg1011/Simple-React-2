import React from "react";
import Button from "./button";
import Input from "./input"
import {userIsRegistered} from "./App";
function Form() {
  return (
    <form className="form">
      <Input
      type="text"
      placeholder= "Username"
      />
       <Input
      type="password"
      placeholder= "Password"
      />
      {userIsRegistered===false &&
       <Input
      type="password"
      placeholder= "Confirm Password"
      />
      }
      <Button 
      type="login"
      />
    </form>
  );
}

export default Form;
