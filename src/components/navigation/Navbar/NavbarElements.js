import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { media } from "../../../styles";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
    to right,
    var(--darkYellow) 10%,
    var(--brightYellow)
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavbarLogo = styled(NavLink)`
  font-size: 2.4rem;
  font-family: var(--headlineFont);

  color: white;

  margin: 0 5rem;
`;

export const NavbarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: flex-end;
  width: 50%;
  list-style: none;

  margin: 0 5rem;

  ${media.phone`
      position: absolute;
      bottom: 0;
      left: 0;

      background-color: darkgrey;
      width: 100%;
      margin: 0 auto;
      padding: 2rem 4rem;
  `}
`;

export const NavbarItem = styled.li`
  font-size: 2.4rem;
  font-family: var(--headlineFont);

  ${media.phone`
     

  
  `}
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  ${media.phone`
  color: black;
    width: 100%
    margin: 0 auto;
  `}
`;
