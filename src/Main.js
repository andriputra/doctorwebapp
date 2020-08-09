import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import { Gem, Building, Award, BoxArrowInRight } from 'react-bootstrap-icons';
import Home from "./layout/home";
import About from "./layout/about";
import Signup from "./layout/signup";
import Profile from "./layout/profile";

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
              Signed in as: 
              <NavLink to="/profile">&nbsp;<span>Mark Otto</span></NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div className="layout">
          <div className="sidebar-nav">
            <ul className="navigation_list">
              <li><NavLink exact to="/"><Building size={22}/><span>Home</span></NavLink></li>
              <li><NavLink to="/about"><Award size={22}/><span>About</span></NavLink></li>
              <li><NavLink to="/signup"><BoxArrowInRight size={22}/><span>Signup</span></NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Container fluid>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/profile" component={Profile}/>
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