import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
        <div className="profile-page">
            <h3>Bioadata</h3>
            <Row>
                <Col xs lg = "3">
                    <div className="profile-page-user-img">
                        <Image src={require("../assets/img/user-profile.png")} rounded  className="img-fluid"/>
                    </div>
                </Col>
                <Col xs lg = "9">
                    <div className="profile-page-user-detail">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>:</td>
                                        <td>Mark Otto</td>
                                    </tr>
                                    <tr>
                                        <td>Username</td>
                                        <td>:</td>
                                        <td>markotto</td>
                                    </tr>
                                    <tr>
                                        <td>Email Address</td>
                                        <td>:</td>
                                        <td>markotto@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Birth of Day</td>
                                        <td>:</td>
                                        <td>02 December 1976</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:</td>
                                        <td>Jl Kebangsaan Timur no.56 Rt.002 Rw.020 Kelurahan Ciparanti Kecamatan Cisurupan Kota Depok Jawabarat</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><Button variant="secondary">Edit</Button></td>
                                        <td><Button variant="success">Save</Button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Profile;