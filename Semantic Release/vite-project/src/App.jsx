import { useState } from "react";
import "./App.css";

function App() {
  const core = require("@actions/core");

  const person = core.getInput("person");
  return <div className="App">console.log(`Welcome ${person}!`)</div>;
}

export default App;
