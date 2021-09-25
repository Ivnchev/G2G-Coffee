import './Login.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import AuthService from '../../../services/Auth/AuthService'
import GlobalContext from '../../../contexts/global/GlobalContext'


const Login = ({
    history
}) => {

    const dispatch = useContext(GlobalContext)[1]

    function submitHandler(values) {
        AuthService.login(values)
            .then(res => {
                dispatch({ type: 'auth', payload: res })
                history.push('/')
            })
    }


    return (
        <div className="login-wrapper">
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(4, 'Too Short!')
                        .max(10, 'Too Long!')
                        .required('Required'),
                    password: Yup.string()
                        .min(4, 'To Short!')
                        .max(10, 'To Long!')
                        .required('Required')
                })}
                onSubmit={submitHandler}

            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="login-form">
                        <h1 className="login-title">Sign in</h1>
                        <div className="login-errors">
                            <p className="login-error"></p>
                        </div>
                        <div className="login-input">
                            <label htmlFor="username"> Username</label>
                            <Field
                                autoFocus
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
                        <div className="login-input">
                            <label htmlFor="password"> Password</label>
                            <Field
                                type="password"
                                name="password"
                                id="password"
                                className={errors.password && touched.password
                                    ? "form-error-color" : ""}
                            />
                            {errors.password && touched.password ? (
                                <div className="form-error-message">{errors.password}</div>
                            ) : null}
                        </div>
                        <div className="login-container">
                            <input type="submit" value="Log In" disabled={isSubmitting} />
                        </div>
                        <div className="login-container">
                            <p>You don't have account?</p>
                            <Link to="/auth/register">
                                <span>Click here.</span>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}


export default Login