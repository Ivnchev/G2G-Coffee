import "./SellChart.css"
import Chart from 'react-apexcharts'
import { Component } from "react"
import targetService from "../../../services/Target/TargetService";
import orderService from "../../../services/Order/OrderService";

class SellChart extends Component {

    constructor(props) {
        super(props);
        this.currentSells = {}
        this.currentTarget = {}
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
                data: [0, 0, 0]
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

        Promise.all([
            orderService.getOrders('all'),
            targetService.getTarget()
        ]).then(([orders, [data]]) => {
            const countData = orders.reduce((a, b) => {
                if (!a[b.product.category]) { a[b.product.category] = 0 }
                a[b.product.category] += 1
                return a
            }, {})
            this.currentSells = {
                ...this.state.series[1],
                data: [countData.coffee || 0, countData.package || 0, countData.accessory || 0]
            }
            this.currentTarget = {
                ...this.state.series[0],
                data: [data.coffee || 0, data.packages || 0, data.accessories || 0]
            }
            this.setState(state => {
                return {
                    ...state,
                    series: [this.currentTarget, this.currentSells]
                }
            })
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

        window.onresize = () => { }
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