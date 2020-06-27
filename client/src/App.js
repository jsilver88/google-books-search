import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
