import { Component } from "react"


class CustomErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error : ', error);
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>I'm soo sorry</h1>
        }

        return this.props.children;
    }
}


export default CustomErrorBoundary