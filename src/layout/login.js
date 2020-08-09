import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
        <div className="login-page">
            <div className="login-page-box">
                <h3 className="text-center">Login</h3>
                <Form>
                    <Form.Group controlId="formAccount">
                        <Form.Label>Email address / Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <div className="if-login">
                            if you don't have account, please&nbsp;
                            <NavLink to="/signup">signup</NavLink>
                        </div>
                    </Form.Group>
                    <Button variant="success" type="submit" className="button-submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
  }
}

export default Login;