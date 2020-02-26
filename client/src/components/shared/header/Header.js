import React from 'react';
import './Header.css';
import logo from '../../../assets/images/dice.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {

    const [collapsed, setCollapsed] = React.useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Router>
      <div>
        <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mx-auto"><img src={logo} className="App-logo" alt="logo" />
          tomsodds
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/tables">tables</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/odds">odds</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/tomkennedycode" target="_blank">github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    </Router>
  );
}

export default Header;
