import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import { Gem, Building, Award } from 'react-bootstrap-icons';
import Home from "./layout/home";
import About from "./layout/about";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar bg="light" variant="dark">
          <Navbar.Brand>
            <NavLink exact to="/">
              <Gem color="white" size={30}/> Diamond Hospital
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div className="layout">
          <div className="sidebar-nav">
            <ul className="navigation_list">
              <li><NavLink exact to="/"><Building size={22}/><span>Home</span></NavLink></li>
              <li><NavLink to="/about"><Award size={22}/><span>About</span></NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Container fluid>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
            </Container>
          </div>
        </div>
        <div className="footer">
          <div className="copyright">
            <p>by Agus Andri Putra</p>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;