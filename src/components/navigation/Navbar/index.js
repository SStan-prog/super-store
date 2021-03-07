import React from "react";

import {
  Nav,
  NavbarItems,
  NavbarItem,
  NavbarLink,
  NavbarLogo,
} from "./NavbarElements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ homeRoute, dealsRoute, cartRoute }) => {
  return (
    <Nav>
      <NavbarLogo to="/">SUPER STORE</NavbarLogo>

      <NavbarItems>
        <NavbarItem>
          <NavbarLink
            to={homeRoute}
            exact
            activeStyle={{ color: "var(--darkBlue)", fontWeight: "700" }}
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            to={dealsRoute}
            exact
            activeStyle={{ color: "var(--darkBlue)", fontWeight: "700" }}
          >
            <FontAwesomeIcon icon={faTags} /> Deals
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            to={cartRoute}
            exact
            activeStyle={{ color: "var(--darkBlue)", fontWeight: "700" }}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </NavbarLink>
        </NavbarItem>
      </NavbarItems>
    </Nav>
  );
};

export default Navbar;
