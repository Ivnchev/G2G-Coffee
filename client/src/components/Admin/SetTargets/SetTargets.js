import "./SetTargets.css"
import { Formik, Form, Field } from "formik"


const SetTargets = (props) => {



    function submitHandler(values, { resetForm }) {

    }

    return (
        <div className="set-targets-wrapper">
            <Formik
                initialValues={{
                    coffee: '40',
                    packages: '12',
                    accessories: '45'
                }}
                enableReinitialize={true}
                onSubmit={submitHandler}
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
                        <div className="set-targets-container">
                            <input type="submit" value="Update" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default SetTargets
