import React, { Component } from "react";
import { Button, Form, Row, Col, Image } from 'react-bootstrap';
import { ArrowBarUp } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
        <div className="signup-page">
        <h3>Sign Up</h3>
        <Row>
            <Col xs lg = "3">
                <div className="signup-page-user-img">
                    <Image src={require("../assets/img/user-profile.png")} rounded  className="img-fluid"/>
                    <Button variant="outline-primary"><ArrowBarUp/> Upload Image</Button>
                </div>
            </Col>
            <Col xs lg = "9">
                <div className="signup-page-user-detail">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="formDoB">
                            <Form.Label>Birth of Day</Form.Label>
                            <Form.Control type="text" placeholder="Enter Birth of Day" />
                        </Form.Group>
                        <Form.Group controlId="formDoB">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter Your Full Address" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </Col>
                            <Col className="text-right">
                                <span className="if-login">
                                    if you have account, please&nbsp;
                                    <NavLink to="/login">login</NavLink>
                                </span>
                            </Col>
                        </Row>
                        <Button variant="success" type="submit" className="button-submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    </div>
    );
  }
}

export default Signup;