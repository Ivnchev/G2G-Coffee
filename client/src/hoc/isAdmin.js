import { Component } from 'react';
import AuthService from '../services/Auth/AuthService';


const isAdmin = (WrappedComponent) => {

    const modifiedComponent = class extends Component {
        constructor(props) {
            super(props)
            this.state = {}
            this.mounted = false
        }

        componentDidMount() {
            this.mounted = true

            AuthService.user()
                .then(res => {
                    if (this.mounted) {
                        this.setState((state, props) => {
                            const isAdmin = res.role === 'admin'
                            if (isAdmin) {
                                return { admin: isAdmin }
                            } else {
                                this.props.history.push('/')
                            }
                        })
                    }
                })
                .catch(() => {
                    if (this.mounted) {
                        this.setState((state, props) => {
                            this.props.history.push('/')
                            return { admin: null }
                        })
                    }
                })
        }

        componentWillUnmount() {
            this.mounted = false
            this.setState(s => ({}))
        }

        render() {
            return this.state.admin
                ? <WrappedComponent {...this.props} />
                : null
        }
    }

    return modifiedComponent;
};

export default isAdmin;