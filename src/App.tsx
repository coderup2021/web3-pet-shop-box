import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";

function App() {
  useEffect(() => {
    console.log("window.Web3", window.web3);
  }, []);
  return <div>this is web3-react</div>;
}

export default App;
