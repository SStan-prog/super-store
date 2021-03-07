import React from "react";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/navigation/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar homeRoute="/" dealsRoute="/deals" cartRoute="/cart" />
        <Switch>
          <Route path="/deals" component={Deals}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
