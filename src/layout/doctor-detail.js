import React, { Component } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

class Doctor extends Component {
  render() {
    return (
        <div className="doctor-detail-page">
            <h3>dr. Tomy Silalahi Sp.PD</h3>
            <Row>
                <Col xs lg = "3">
                    <div className="doctor-detail-page-img">
                        <Image src={require("../assets/img/doctor1.jpg")} rounded  className="img-fluid"/>
                    </div>
                </Col>
                <Col xs lg = "9">
                    <div className="doctor-detail-page-detail">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>:</td>
                                        <td>dr. Tomy Silalahi Sp.PD</td>
                                    </tr>
                                    <tr>
                                        <td>Specialist</td>
                                        <td>:</td>
                                        <td>Dokter Penyakit Dalam</td>
                                    </tr>
                                    <tr>
                                        <td>Schedule</td>
                                        <td>:</td>
                                        <td>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</td>
                                    </tr>
                                    <tr>
                                        <td>Rating</td>
                                        <td>:</td>
                                        <td className="star-rate"><StarFill/><StarFill/><StarFill/><StarFill/><StarHalf/></td>
                                    </tr>
                                    <tr>
                                        <td>Consulting rate</td>
                                        <td>:</td>
                                        <td className="star-rate"><StarFill/><StarFill/><StarFill/><StarHalf/><Star/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="doctor-poling">
                <h6>Please enter your comment and rate for doctor</h6>
                <div className="doctor-poling-table">
                    <span>Kualitas dalam konsultasi kesehatan</span>
                    <span>:</span>
                    <div className="star">
                        <Form>
                            <Form.Check inline label="1" type='radio' id='rateConsult' name="consulting"/>
                            <Form.Check inline label="2" type='radio' id='rateConsult' name="consulting"/>
                            <Form.Check inline label="3" type='radio' id='rateConsult' name="consulting"/>
                            <Form.Check inline label="4" type='radio' id='rateConsult' name="consulting"/>
                            <Form.Check inline label="5" type='radio' id='rateConsult' name="consulting"/>
                        </Form>
                    </div>
                </div>
                <div className="doctor-poling-table">
                    <span>Kualitas dalam tindakan</span>
                    <span>:</span>
                    <div className="star">
                        <Form>
                            <Form.Check inline label="1" type='radio' id='rateConsult' name="pemeriksaan"/>
                            <Form.Check inline label="2" type='radio' id='rateConsult' name="pemeriksaan"/>
                            <Form.Check inline label="3" type='radio' id='rateConsult' name="pemeriksaan"/>
                            <Form.Check inline label="4" type='radio' id='rateConsult' name="pemeriksaan"/>
                            <Form.Check inline label="5" type='radio' id='rateConsult' name="pemeriksaan"/>
                        </Form>
                    </div>
                </div>
                <Button>Submit</Button>
            </div>
        </div>
    );
  }
}

export default Doctor;