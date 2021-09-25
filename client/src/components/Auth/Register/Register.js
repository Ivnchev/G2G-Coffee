import './Register.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


import AuthService from '../../../services/Auth/AuthService'
import GlobalContext from '../../../contexts/global/GlobalContext'


const Register = ({
    history
}) => {

    const [gender, setGender] = useState('male')
    const dispatch = useContext(GlobalContext)[1]


    function userOnChange(event) {
        setGender(() => (event.target.name))
    }


    function submitHandler(values) {
        AuthService.register(values)
            .then(res => {
                dispatch({ type: 'auth', payload: res })
                history.push('/')
            })
    }

    return (
        <div className="register-wrapper">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    email: '',
                    rePassword: '',
                    gender: 'male',
                    cardNumber: '',
                    cardExpires: '',
                    cardSecurity: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(4, 'Too Short!')
                        .max(10, 'Too Long!')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid Email!')
                        .required('Required!'),
                    password: Yup.string()
                        .min(4, 'To Short!')
                        .max(10, 'To Long!')
                        .required('Required'),
                    rePassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Must match!')
                        .required('Required'),
                    cardNumber: Yup.string()
                        .matches(/^\d{12}$/, '12 digits required!')
                        .required('Required'),
                    cardSecurity: Yup.string()
                        .matches(/^\d{3}$/, '3 digits required!')
                        .required('Required'),
                    cardExpires: Yup.date()
                        .required('Required')
                        .min(new Date('01-01-2011'), 'Incorrect date')
                })}
                onSubmit={submitHandler}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="register-form">
                        <h1 className="register-title">Sign up</h1>
                        <div className="register-errors">
                            <p className="register-error"></p>
                        </div>
                        <div className="register-input">
                            <label htmlFor="username"> Username</label>
                            <Field
                                type="text"
                                name="username"
                                id="username"
                                className={errors.username && touched.username
                                    ? "form-error-color" : ""}
                            />
                            {errors.username && touched.username ? (
                                <div className="form-error-message">{errors.username}</div>
                            ) : null}
                        </div>
                        <div className="register-input">
                            <label htmlFor="email"> Email</label>
                            <Field
                                type="text"
                                name="email"
                                id="email"
                                className={errors.email && touched.email
                                    ? "form-error-color" : ""}
                            />
                            {errors.email && touched.email ? (
                                <div className="form-error-message">{errors.email}</div>
                            ) : null}
                        </div>
                        <div className="register-input">
                            <label htmlFor="password"> Password</label>
                            <Field
                                type="password"
                                name="password"
                                id="password"
                                className={errors.email && touched.email
                                    ? "form-error-color" : ""}
                            />
                            {errors.password && touched.password ? (
                                <div className="form-error-message">{errors.password}</div>
                            ) : null}
                        </div>
                        <div className="register-input">
                            <label htmlFor="re-password">Repeat Password</label>
                            <Field
                                type="password"
                                name="rePassword"
                                id="re-password"
                                className={errors.rePassword && touched.rePassword
                                    ? "form-error-color" : ""}
                            />
                            {errors.rePassword && touched.rePassword ? (
                                <div className="form-error-message">{errors.rePassword}</div>
                            ) : null}
                        </div>
                        <div className="profile-register-gender">
                            <h4>Gender:</h4>
                            <div className="profile-register-gender-wrapper">
                                <label htmlFor="gender">Male</label>
                                <Field
                                    type="radio"
                                    name="male"
                                    checked={gender === "male" || gender === undefined}
                                    onChange={userOnChange}
                                    id="male"
                                />
                            </div>
                            <div className="profile-register-gender-wrapper">
                                <label htmlFor="gender">Female</label>
                                <Field
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
                                <Field
                                    type="number"
                                    name="cardNumber"
                                    id="cardNumber"
                                    className={errors.cardNumber && touched.cardNumber
                                        ? "form-error-color" : ""}
                                />
                                {errors.cardNumber && touched.cardNumber ? (
                                    <div className="form-error-message">{errors.cardNumber}</div>
                                ) : null}
                            </div>
                            <div className="card-security-container">
                                <div className="register-input">
                                    <label htmlFor="cardExpires">Expires</label>
                                    <Field
                                        type="month"
                                        name="cardExpires"
                                        id="cardExpires"
                                        min="2011-01"
                                        className={errors.cardExpires && touched.cardExpires
                                            ? "form-error-color" : ""}
                                    />
                                    {errors.cardExpires && touched.cardExpires ? (
                                        <div className="form-error-message">{errors.cardExpires}</div>
                                    ) : null}
                                </div>
                                <div className="register-input">
                                    <label htmlFor="cardSecurity">Pin</label>
                                    <Field
                                        type="number"
                                        name="cardSecurity"
                                        id="cardSecurity"
                                        max={999}
                                        className={errors.cardSecurity && touched.cardSecurity
                                            ? "form-error-color" : ""}
                                    />
                                    {errors.cardSecurity && touched.cardSecurity ? (
                                        <div className="form-error-message">{errors.cardSecurity}</div>
                                    ) : null}
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
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default Register