import './Login.css'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/Auth/AuthService'
import { useContext } from 'react'
import GlobalContext from '../../../contexts/global/GlobalContext'



const Login = ({
    history
}) => {

    const [globalState, dispatch] = useContext(GlobalContext)

    function submitHandler(e) {
        e.preventDefault()
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        }

        AuthService.login(data)
            .then(res => {
                dispatch({ type: 'auth', payload: res })
                history.push('/')
                console.log(globalState);
            })
    }


    return (
        <div className="login-wrapper">
            <form className="login-form" onSubmit={submitHandler}>
                <h1 className="login-title">Sign in</h1>
                <div className="login-errors">
                    <p className="login-error"></p>
                </div>
                <div className="login-input">
                    <label htmlFor="username"> Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="login-input">
                    <label htmlFor="password"> Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="login-container">
                    <input type="submit" value="Log In" />
                </div>
                <div className="login-container">
                    <p>You don't have account?</p>
                    <Link to="/auth/register">
                        <span>Click here.</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}


export default Login