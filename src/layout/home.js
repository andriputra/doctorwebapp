import React, { Component } from "react";
import { Row, Col, Form, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page-banner"></div>
        <div className="home-page-overview">
          <h4>Diamond Hospital</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis sapien ut lectus pellentesque, a lobortis nibh ornare. Phasellus et ex vel erat aliquet laoreet fermentum ac dolor. Cras lectus sem, vehicula sit amet tempus a, mattis sit amet nibh. Mauris dui eros, vestibulum in luctus sed, auctor non sem. Praesent non risus dictum, fermentum ipsum sed, consectetur purus.</p>
        </div>
        <div className="home-page-poli-listing">
          <Row>
            <Col xs lg ="4">
              <div className="poli-listing-box">
                <NavLink to="/detail-klinik">
                  <div className="banner-poli dental"></div>
                  <h4 className="text-center">Dental Specialist</h4>
                </NavLink>
              </div>
            </Col>
            <Col xs lg ="4">
              <div className="poli-listing-box">
                <NavLink to="/detail-klinik">
                  <div className="banner-poli obgyn"></div>
                  <h4 className="text-center">Obgyn Specialist</h4>
                </NavLink>
              </div>
            </Col>
            <Col xs lg ="4">
              <div className="poli-listing-box">
                <NavLink to="/detail-klinik">
                  <div className="banner-poli internist"></div>
                  <h4 className="text-center">Internist Specialist</h4>
                </NavLink>
              </div>
            </Col>
          </Row>
          <p> Pellentesque eget libero posuere, ullamcorper tellus vel, fringilla nulla. 
              Donec quis purus magna. Phasellus in volutpat arcu, in lacinia nisl. 
              Mauris sodales placerat velit, sed pharetra tortor ultrices ac. 
              Pellentesque pretium, orci vitae sagittis faucibus, odio mi convallis arcu, 
              id vulputate purus massa rhoncus turpis. Mauris nec nibh urna.</p>
        </div>
        <div className="home-page-doctor-schedule">
          <Row>
            <Col>
              <h5>Doctor Schedule</h5>
            </Col>
            <Col className="text-right">
              <Form.Control type="text" placeholder="Doctor Search" />
            </Col>
          </Row>
          <p>Quisque pellentesque sapien et lobortis luctus. Pellentesque felis elit, 
            pellentesque et feugiat eu, ultricies id metus. Phasellus vel lacus elit.</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th rowSpan="2">Doctor</th>
                  <th rowSpan="2">Specialist</th>
                  <th colSpan="7" className="text-center">Schedule</th>
                </tr>
                <tr>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <NavLink to="/doctor-detail">
                      <Image src={require('../assets/img/doctor1.jpg')} className="img-fluid doctor-profile"/>
                      <p className="doctor-name">dr. Tomy Silalahi, Sp.PD</p>
                    </NavLink>
                  </td>
                  <td>Spesialis Penyakit Dalam</td>
                  <td>07:00 - 09:00 WIB</td>
                  <td>07:00 - 09:00 WIB</td>
                  <td>07:00 - 09:00 WIB</td>
                  <td>07:00 - 09:00 WIB</td>
                  <td>07:00 - 09:00 WIB</td>
                  <td>07:00 - 09:00 WIB</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <NavLink to="/doctor-detail">
                      <Image src={require('../assets/img/doctor2.png')} className="img-fluid doctor-profile"/>
                      <p className="doctor-name">dr. Tamara Sujiwo Adjie, Sp.OG</p>
                    </NavLink>
                  </td>
                  <td>Spesialis Kandungan</td>
                  <td>07:00 - 12:00 WIB</td>
                  <td>07:00 - 12:00 WIB</td>
                  <td>07:00 - 12:00 WIB</td>
                  <td>07:00 - 12:00 WIB</td>
                  <td>07:00 - 12:00 WIB</td>
                  <td>07:00 - 12:00 WIB</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <NavLink to="/doctor-detail">
                      <Image src={require('../assets/img/doctor3.jpg')} className="img-fluid doctor-profile"/>
                      <p className="doctor-name">dr. Sugandi Rahayu, Sp.PM</p>
                    </NavLink>
                  </td>
                  <td>Spesialis Gigi dan Mulut</td>
                  <td>09:00 - 14:00 WIB</td>
                  <td>09:00 - 14:00 WIB</td>
                  <td>09:00 - 14:00 WIB</td>
                  <td>-</td>
                  <td>09:00 - 14:00 WIB</td>
                  <td>-</td>
                  <td>09:00 - 14:00 WIB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;