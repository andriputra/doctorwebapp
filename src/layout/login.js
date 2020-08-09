import React, { Component } from "react";
import { ArrowRight } from 'react-bootstrap-icons';

class Login extends Component {
  render() {
    return (
        <div className="container">
            <h2>Test Title</h2>
            <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
                </div>
                <ArrowRight color="royalblue" size={20} />
        </div>
    );
  }
}

export default Login;