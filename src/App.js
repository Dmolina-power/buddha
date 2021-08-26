import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Styles
import "./App.css";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />{" "}
      <Route exact path="/about" component={About} />{" "}
      <Route exact path="/contact" component={Contact} />{" "}
      <Route exact path="/shoppingCart" component={ShoppingCart} />{" "}
    </Router>
  );
}

export default App;
