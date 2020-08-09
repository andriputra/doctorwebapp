import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData,
            chartDataMonth:props.chartDataMonth
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City',
        time: 'Year'
    }

    render(){
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                        display:this.props.displayTitle,
                        text:'Consult of the '+ this.props.time + this.props.location,
                        fontSize:14
                        },
                        legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;