import React from "react";
import ReactDOM from "react-dom";
import Square from "./square/Square";

function App() {
  return <Square />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
