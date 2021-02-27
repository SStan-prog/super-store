import React from "react";
import reactDom from "react-dom";

import {
  Nav,
  NavbarItems,
  NavbarItem,
  NavbarLink,
  NavbarLogo,
} from "./NavbarElements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../../pages/Home";
import Deals from "../../../pages/Deals";
import Cart from "../../../pages/Cart";

const Navbar = () => {
  return (
    <Router>
      <Nav>
        <NavbarLogo to="/">SUPER STORE</NavbarLogo>

        <NavbarItems>
          <NavbarItem>
            <NavbarLink
              to="/"
              exact
              activeStyle={{ color: "var(--darkBlue)", fontWeight: "700" }}
            >
              Home
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              to="/deals"
              exact
              activeStyle={{ color: "var(--darkBlue)", fontWeight: "700" }}
            >
              Deals
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              to="/cart"
              exact
              activeStyle={{ color: "var(--darkBlue)", fontWeight: "700" }}
            >
              Cart
            </NavbarLink>
          </NavbarItem>
        </NavbarItems>
      </Nav>

      <Switch>
        <Route path="/deals" component={Deals}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
