import "./SetQuestions.css"
import { Formik, Form, Field } from "formik"
import { useContext } from "react";
import * as Yup from 'yup';
import { withRouter } from "react-router-dom";
import GlobalContext from "../../../contexts/global/GlobalContext";
import qustionService from "../../../services/Questions/QuestionService";

const SetQuestions = ({
    history
}) => {

    const initialValues = {
        title: '',
        answear: '',
        category: 'coffee'
    }

    const dispatch = useContext(GlobalContext)[1]

    function submitHandler(values, { resetForm }) {
        qustionService.postQuestion(values)
            .then(() => {
                resetForm(initialValues)
                history.push('/question-and-answers')
            }).catch(err => {
                resetForm(initialValues)
                dispatch({ type: 'error', payload: err })
            })
    }

    return (
        <div className="set-question-wrapper">
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={submitHandler}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .min(5, 'Too Short!')
                        .max(999, 'Too Long!')
                        .required('Required'),
                    answear: Yup.string()
                        .min(10, 'Too Short!')
                        .max(999, 'Too Long!')
                        .required('Required'),
                })}
            >
                {({ errors, touched, isSubmitting, values, handleChange }) => (
                    <Form className="set-question-form">
                        <h1 className="set-question-title">Set Question</h1>
                        <div className="set-question-input">
                            <label htmlFor="coffee">Title</label>
                            <Field
                                type="text"
                                name="title"
                                id="title"
                                className={errors.title && touched.title
                                    ? "form-error-color" : ""}
                            />
                            {errors.title && touched.title ? (
                                <div className="form-error-message">{errors.title}</div>
                            ) : null}
                        </div>
                        <div className="set-question-input">
                            <label htmlFor="answear">Answear</label>
                            <Field
                                type="text"
                                as="textarea"
                                name="answear"
                                id="answear"
                                cols="50"
                                rows="10"
                                className={errors.answear && touched.answear ? "form-error-color" : ""}
                            />
                            {errors.answear && touched.answear ? (
                                <div className="form-error-message">{errors.answear}</div>
                            ) : null}
                        </div>
                        <div className="set-question-container">
                            <h3>Question Category</h3>
                            <div className="set-question-select-wrapper">
                                <Field
                                    id="category"
                                    as="select"
                                    name="category"
                                    onChange={handleChange}
                                    value={values.category}
                                >
                                    <option value="coffee">Coffee</option>
                                    <option value="package">Packages</option>
                                    <option value="accessory">Accessories</option>
                                </Field>
                                {errors.category && touched.category ? (
                                    <div>{errors.category}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="set-question-container">
                            <input type="submit" value="Update" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default withRouter(SetQuestions)