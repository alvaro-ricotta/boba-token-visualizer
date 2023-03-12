import React from "react";
import "./App.css";
import { Header } from "./components/header/";
import { Tokens } from "./components/tokens/";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container">
      <Header />
      <Tokens />
      <Toaster
        toastOptions={{
          style: {
            fontSize: "12px",
            border: "1px solid rgb(45, 47, 58)",
            padding: "5px 15px",
            background: "rgb(27, 28, 31)",
            color: "#cbff00",
          },
        }}
      />
    </div>
  );
}

export default App;
