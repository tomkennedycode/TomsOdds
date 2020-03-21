import React from 'react';
import './Header.css';
import logo from '../../../assets/images/dice.png';
import Home from '../../home/Home';
import Upcoming from '../../upcoming/Upcoming';
import AccumulatorBuilder from '../../accumulatorbuilder/AccumulatorBuilder';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              <Link to="/upcoming"><NavLink>upcoming</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/accumulator"><NavLink>accumulator builder</NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/tomkennedycode" target="_blank">github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/upcoming">
          <Upcoming />
        </Route>
        <Route exact path="/accumulator">
          <AccumulatorBuilder />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default Header;
