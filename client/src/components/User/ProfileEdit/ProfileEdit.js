import './ProfileEdit.css'
import { useState, useContext, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import userService from '../../../services/User/UserService';
import GlobalContext from '../../../contexts/global/GlobalContext';
import { withRouter } from 'react-router-dom';


const ProfileEdit = ({
    history
}) => {

    const mapPropsToValues = () => ({
        username: '',
        oldPassword: '',
        newPassword: '',
        email: '',
        cardNumber: '',
        cardExpires: '',
        cardSecurity: ''
    })

    const [{ auth }, dispatch] = useContext(GlobalContext)
    const [user, setUser] = useState(mapPropsToValues())

    useEffect(() => {
        if (auth) {
            userService.user(auth?._id)
                .then(data => {
                    setUser(() => data)
                })
                .catch(err => {
                    dispatch({ type: 'error', payload: err })
                })
        }
        return () => {
            setUser(() => (mapPropsToValues()))
        }
    }, [auth, dispatch])


    function submitHandler(values, { resetForm }) {
        userService.updateUser(user._id, values)
            .then(res => {
                resetForm({})
                dispatch({ type: 'auth', payload: res })
                history.push('/user/' + user._id + '/profile')
            }).catch(error => {
                dispatch({ type: 'error', payload: error })
                resetForm()
            })
    }

    return (
        <div className="profile-edit-wrapper">
            <Formik
                initialValues={{
                    username: user.username,
                    oldPassword: user.oldPassword || '',
                    newPassword: user.newPassword || '',
                    email: user.email,
                    cardNumber: user.card?.cardNumber || '',
                    cardExpires: user.card?.cardExpires.toString().slice(0, 7) || '',
                    cardSecurity: user.card?.cardSecurity || ''
                }}
                enableReinitialize={true}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(4, 'Too Short!')
                        .max(10, 'Too Long!')
                        .required('Required'),
                    oldPassword: Yup.string()
                        .min(4, 'To Short!')
                        .max(10, 'To Long!')
                        .required('Required'),
                    newPassword: Yup.string()
                        .min(4, 'To Short!')
                        .max(10, 'To Long!')
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
                    <Form className="profile-edit-form">
                        <h1 className="profile-edit-title">Edit Profile</h1>
                        <div className="profile-edit-input">
                            <label htmlFor="username">Username</label>
                            <Field
                                type="text"
                                name="username"
                                id="username"
                                className={errors.username && touched.username
                                    ? "form-error-color" : ""}
                            />
                            {errors.username && touched.username ? (
                                <div className="form-error-message">
                                    {errors.username}</div>
                            ) : null}
                        </div>
                        <div className="profile-edit-input">
                            <label htmlFor="email">Email</label>
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
                        <div className="profile-edit-input">
                            <label htmlFor="oldPassword">Old Password</label>
                            <Field
                                type="password"
                                name="oldPassword"
                                id="oldPassword"
                                className={errors.password && touched.password
                                    ? "form-error-color" : ""}
                            />
                            {errors.password && touched.password ? (
                                <div className="form-error-message">{errors.password}</div>
                            ) : null}
                        </div>
                        <div className="profile-edit-input">
                            <label htmlFor="newPassword">New Password</label>
                            <Field
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                className={errors.newPassword && touched.newPassword
                                    ? "form-error-color" : ""}
                            />
                            {errors.newPassword && touched.newPassword ? (
                                <div className="form-error-message">{errors.newPassword}</div>
                            ) : null}
                        </div>

                        <div className="profile-edit-card-container">
                            <div className="profile-edit-input">
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
                            <div className="profile-edit-security-container">
                                <div className="profile-edit-input">
                                    <label htmlFor="cardExpires">Expires</label>
                                    <Field
                                        type="month"
                                        name="cardExpires" id="cardExpires"
                                        min="2011-01"
                                        className={errors.cardExpires && touched.cardExpires
                                            ? "form-error-color" : ""}
                                    />
                                    {errors.cardExpires && touched.cardExpires ? (
                                        <div className="form-error-message">{errors.cardExpires}</div>
                                    ) : null}
                                </div>
                                <div className="profile-edit-input">
                                    <label htmlFor="cardSecurity">Pin</label>
                                    <Field
                                        type="number"
                                        name="cardSecurity"
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
                        <div className="profile-edit-container">
                            <input type="submit" value="Update" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}


export default withRouter(ProfileEdit)