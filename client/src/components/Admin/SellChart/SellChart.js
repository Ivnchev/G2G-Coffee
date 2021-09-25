import "./SellChart.css"
import Chart from 'react-apexcharts'
import { Component } from "react"

class SellChart extends Component {

    constructor(props) {
        super(props);
        this.currentSells = {}
        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example',
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: ['Coffe', 'Packages', 'Accessories']
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                }
            },
            series: [{
                name: "Target Sells",
                type: "column",
                data: [40, 12, 45]
            },
            {
                name: 'Current Sells',
                type: 'column',
                data: [50, 20, 50]
            }],
            resize: window.innerWidth * 0.8
        }
    }

    componentDidMount() {
        this.currentSells = {
            ...this.state.series[1],
            data: [50, 20, 50]
        }
        const currentSells = this.currentSells
        this.setState(state => {
            return {
                ...state,
                series: [state.series[0], currentSells]
            }
        })
    }

    componentDidUpdate() {
        window.onresize = () => {
            if ((window.innerWidth * 0.8) !== this.state.resize) {
                this.setState(state => ({ ...state, resize: (window.innerWidth * 0.8) }))
            }
        }
    }

    componentWillUnmount() {

        window.onresize = () => {}
    }


    render() {
        return (
            <div className="sell-chart-wrapper">
                <h3>Sells</h3>
                <div className="sell-chart">
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={this.state.resize} height={320} />
                </div>
            </div>
        )
    }
}


export default SellChart