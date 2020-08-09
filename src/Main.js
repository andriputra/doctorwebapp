import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import { Gem, Building, Award, BoxArrowInRight } from 'react-bootstrap-icons';
import Home from "./layout/home";
import Statistic from "./layout/statistic";
import Signup from "./layout/signup";
import Profile from "./layout/profile";
import Login from "./layout/login";
import Doctor from "./layout/doctor-detail";

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
              <li><NavLink to="/statistic"><Award size={22}/><span>Statistics</span></NavLink></li>
              <li><NavLink to="/signup"><BoxArrowInRight size={22}/><span>Signup</span></NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Container fluid>
              <Route exact path="/" component={Home}/>
              <Route exact path="/statistic" component={Statistic}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/doctor-detail" component={Doctor}/>
            </Container>
          </div>
        </div>
        <div className="footer">
          <div className="copyright">
            <p>Copyright @2020 Agus Andri Putra All Rights Reserved</p>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;