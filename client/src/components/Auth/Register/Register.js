import './Register.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { dateFormatValidator } from '../../../utils/validators/validators'
import AuthService from '../../../services/Auth/AuthService'
import GlobalContext from '../../../contexts/global/GlobalContext'


const Register = ({
    history
}) => {

    const [gender, setGender] = useState('male')
    const [securityDate, setSecurityDate] = useState('')
    const [globalState, dispatch] = useContext(GlobalContext)


    function userOnChange(event) {
        setGender(() => (event.target.name))
    }

    function securityDateCheck(event) {
        const rowDate = event.target.value
        setSecurityDate(state => dateFormatValidator(rowDate, state))
    }

    function submitHandler(e) {
        e.preventDefault()
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value,
            rePassword: e.target.rePassword.value,
            gender: gender,
            card: {
                number: e.target.cardNumber.value,
                date: e.target.cardExpires.value,
                securityCode: e.target.cardSecurity.value
            }
        }

        AuthService.register(data)
            .then(res => {
                dispatch({ type: 'auth', payload: res })
                history.push('/')
                console.log(globalState);
            })

    }

    return (
        <div className="register-wrapper">
            <form className="register-form" onSubmit={submitHandler}>
                <h1 className="register-title">Sign up</h1>
                <div className="register-errors">
                    <p className="register-error"></p>
                </div>
                <div className="register-input">
                    <label htmlFor="username"> Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="register-input">
                    <label htmlFor="email"> Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="register-input">
                    <label htmlFor="password"> Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="register-input">
                    <label htmlFor="re-password">Repeat Password</label>
                    <input type="password" name="rePassword" id="re-password" />
                </div>
                <div className="profile-register-gender">
                    <h4>Gender:</h4>
                    <div className="profile-register-gender-wrapper">
                        <label htmlFor="gender">Male</label>
                        <input
                            type="radio"
                            name="male"
                            checked={gender === "male" || gender === undefined}
                            onChange={userOnChange}
                            id="male"
                        />
                    </div>
                    <div className="profile-register-gender-wrapper">
                        <label htmlFor="gender">Female</label>
                        <input
                            type="radio"
                            name="female"
                            id="female"
                            onChange={userOnChange}
                            checked={gender === "female"}
                        />
                    </div>
                </div>
                <div className="register-card-container">
                    <div className="register-input">
                        <label htmlFor="cardNumber">Card number</label>
                        <input type="number" name="cardNumber" id="cardNumber" min={999999999999} />
                    </div>
                    <div className="card-security-container">
                        <div className="register-input">
                            <label htmlFor="cardExpires">Expires</label>
                            <input type="text" name="cardExpires" id="cardExpires" onChange={securityDateCheck} value={securityDate} maxLength={5} />
                        </div>
                        <div className="register-input">
                            <label htmlFor="cardSecurity">Security Pin</label>
                            <input type="number" name="cardSecurity" id="cardSecurity" max={999} />
                        </div>
                    </div>
                </div>

                <div className="register-container">
                    <input type="submit" value="Register" />
                </div>
                <div className="register-container">

                    <p>You already have account?</p>
                    <Link to="/auth/login">
                        <span>Click here.</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}


export default Register