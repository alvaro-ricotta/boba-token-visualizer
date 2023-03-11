import React from "react";
import "./App.css";
import { Header } from "./components/header/";
import { Tokens } from "./components/tokens/";

function App() {
  return (
    <div className="container">
      <Header />
      <Tokens />
    </div>
  );
}

export default App;
