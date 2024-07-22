import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Todos from "./Components/Todos";

export default function App() {
  return (
    <div>
      <Nav />
      <Todos />
    </div>
  );
}
