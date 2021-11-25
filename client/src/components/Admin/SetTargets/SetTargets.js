import "./SetTargets.css"
import { Formik, Form, Field } from "formik"
import { useContext } from "react";
import * as Yup from 'yup';
import { withRouter } from "react-router-dom";
import targetService from "../../../services/Target/TargetService";
import GlobalContext from "../../../contexts/global/GlobalContext";

const SetTargets = ({
    history
}) => {

    const initialValues = {
        coffee: '',
        packages: '',
        accessories: '',
        date: ''
    }

    const dispatch = useContext(GlobalContext)[1]

    function submitHandler(values, { resetForm }) {
        targetService.postTarget(values)
            .then(() => {
                resetForm(initialValues)
                history.push('/control-panel?=sellChart')
            }).catch(err => {
                resetForm(initialValues)
                dispatch({ type: 'error', payload: err })
            })
    }

    return (
        <div className="set-targets-wrapper">
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={submitHandler}
                validationSchema={Yup.object().shape({
                    coffee: Yup.string()
                        .min(1, 'Too Short!')
                        .max(999, 'Too Long!')
                        .required('Required'),
                    packages: Yup.string()
                        .min(1, 'Too Short!')
                        .max(999, 'Too Long!')
                        .required('Required'),
                    accessories: Yup.string()
                        .min(1, 'Too Short!')
                        .max(999, 'Too Long!')
                        .required('Required'),
                    date: Yup.date()
                        .required('Required')
                        .min(new Date('01-01-2011'), 'Incorrect date')
                })}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="set-targets-form">
                        <h1 className="set-targets-title">Set targets</h1>
                        <div className="set-targets-input">
                            <label htmlFor="coffee">Coffee</label>
                            <Field
                                type="number"
                                name="coffee"
                                id="coffee"
                                className={errors.coffee && touched.coffee
                                    ? "form-error-color" : ""}
                            />
                            {errors.coffee && touched.coffee ? (
                                <div className="form-error-message">{errors.coffee}</div>
                            ) : null}
                        </div>
                        <div className="set-targets-input">
                            <label htmlFor="packages">Packages</label>
                            <Field
                                type="number"
                                name="packages"
                                id="packages"
                                className={errors.packages && touched.packages
                                    ? "form-error-color" : ""}
                            />
                            {errors.packages && touched.packages ? (
                                <div className="form-error-message">{errors.packages}</div>
                            ) : null}
                        </div>
                        <div className="set-targets-input">
                            <label htmlFor="accessories">Accessories</label>
                            <Field
                                type="number"
                                name="accessories"
                                id="accessories"
                                className={errors.accessories && touched.accessories
                                    ? "form-error-color" : ""}
                            />
                            {errors.accessories && touched.accessories ? (
                                <div className="form-error-message">{errors.accessories}</div>
                            ) : null}
                        </div>
                        <div className="set-targets-input">
                            <label htmlFor="date">Date</label>
                            <Field
                                type="month"
                                name="date" id="date"
                                min="2011-01"
                                className={errors.date && touched.date
                                    ? "form-error-color" : ""}
                            />
                            {errors.date && touched.date ? (
                                <div className="form-error-message">{errors.date}</div>
                            ) : null}
                        </div>
                        <div className="set-targets-container">
                            <input type="submit" value="Update" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default withRouter(SetTargets)
