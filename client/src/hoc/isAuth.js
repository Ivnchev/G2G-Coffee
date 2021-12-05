import { Component } from 'react';
import AuthService from '../services/Auth/AuthService';

const isAuth = (WrappedComponent) => {

    const modifiedComponent = class extends Component {
        constructor(props) {
            super(props)
            this.state = {}
        }

        componentDidMount() {

            AuthService.user()
                .then(res => {
                    if (res._id) {
                        this.setState((state, props) => {
                            return { component: true, user: res }
                        })
                    } else {
                        this.setState((state, props) => {
                            this.props.history.push('/auth/login')
                            return { component: null }
                        })
                    }

                })
                .catch(() => {
                    this.setState((state, props) => {
                        this.props.history.push('/auth/login')
                        return { component: null }
                    })
                })
        }

        componentWillUnmount() {
            this.setState(s => ({}))
        }

        render() {
            return this.state.component ? <WrappedComponent {...this.props} {...this.state} /> : null
        }
    }


    return modifiedComponent;

    // const Component = (props) => {
    //     const [context, dispatch] = useContext(GlobalContext);
    //     const history = useHistory();


    //     return AuthService.user()
    //         .then(res => {
    //             dispatch({ type: 'auth', payload: res })
    //             return <WrappedComponent {...props} />
    //         })
    //         .catch(() => {
    //             history.push('/auth/login')
    //             return null
    //         })
    // }

    // return Component;
};

export default isAuth;


