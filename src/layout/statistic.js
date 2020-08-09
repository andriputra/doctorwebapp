import React, { Component } from "react";
import Chart from '../components/Charts';
import { Row, Col } from 'react-bootstrap';

class Statistic extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartDataMonth:{
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets:[
          {
            label:'Patien',
            data:[
              170,
              200,
              230,
              170,
              100,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },
      chartData:{
        labels: ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
          {
            label:'Patien',
            data:[
              590,
              900,
              780,
              340,
              100,
              976,
              445,
              1001,
              1200,
              785,
              356,
              978
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(62, 162, 62, 0.6)',
              'rgba(199, 82, 163, 0.6)',
              'rgba(172, 102, 216, 0.6)',
              'rgba(1, 115, 20, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="statistic-page">
        <h3>Statistic of Diamond Hospital</h3>
        <div className="statistic-page-chart">
          <Row>
            <Col xs lg="6">
              <Chart chartData={this.state.chartData} time="Year " location="Diamond Hospital" legendPosition="bottom"/>
            </Col>
            <Col xs lg="6">
              <Chart chartData={this.state.chartDataMonth} time="Month " location="Diamond Hospital" legendPosition="bottom"/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Statistic;