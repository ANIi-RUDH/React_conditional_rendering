import React from "react";
import Verify from "./yes"
var logIn=false

function App() {
  if (logIn===false){
    return (
      <div className="container">
        <h1>Hello</h1>
        <Verify />
        
      
      </div>
    );

  }
  else{
    return (
      <div className="container">
        <h1>HIIII</h1>
      </div>
    )
  }
}

export default App;
