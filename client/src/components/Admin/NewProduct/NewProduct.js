import './NewProduct.css'
import { Formik, Form, Field } from 'formik';
import { withRouter } from "react-router";
import { useContext } from 'react';
import * as Yup from 'yup';
import productService from '../../../services/Products/ProductService';
import GlobalContext from '../../../contexts/global/GlobalContext';


const NewProduct = ({
    history
}) => {

    const initialValues = {
        title: '',
        imageURL: '',
        description: '',
        category: 'coffee',
        price: ''
    }

    const dispatch = useContext(GlobalContext)[1]

    function submitHandler(values, actions) {
        productService.postProduct(values)
            .then(() => {
                actions.resetForm(initialValues)
                history.push('/control-panel?=editProduct')
            }).catch(error => {
                dispatch({ type: 'error', payload: error })
                actions.resetForm(initialValues)
            })
    }

    return (
        <div className="new-product-wrapper">
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .min(5, 'Too Short!')
                        .max(10, 'Too Long!')
                        .required('Required'),
                    imageURL: Yup.string()
                        .matches(/^https?:\/\//, 'Invalid URL!')
                        .required('Required'),
                    description: Yup.string()
                        .min(10, 'To Short!')
                        .max(50, 'To Long!')
                        .required('Required'),
                    price: Yup.number()
                        .min(1, 'At least 1$ !')
                        .max(20, 'Less than 20$ !')
                        .required('Required')
                })}
                onSubmit={submitHandler}
            >
                {({ errors, touched, isSubmitting, values, handleChange }) => (
                    <Form className="new-product-form">
                        <h1 className="new-product-title">New Product</h1>
                        <div className="new-product-errors">
                            <p className="new-product-error"></p>
                        </div>

                        <div className="new-product-input">
                            <label htmlFor="productName"> Product Name</label>
                            <Field
                                name="title"
                                type="text"
                                id="title"
                                autoFocus
                                className={errors.title && touched.title ? "form-error-color" : ""}
                            />
                            {errors.title && touched.title ? (
                                <div className="form-error-message">{errors.title}</div>
                            ) : null}
                        </div>

                        <div className="new-product-input">
                            <label htmlFor="imageURL"> Product Image</label>
                            <Field
                                type="url"
                                name="imageURL"
                                id="imageURL"
                                placeholder="https://example.com"
                                className={errors.imageURL && touched.imageURL ? "form-error-color" : ""}
                            />
                            {errors.imageURL && touched.imageURL ? (
                                <div className="form-error-message">{errors.imageURL}</div>
                            ) : null}
                        </div>
                        <div className="new-product-input">
                            <label htmlFor="description"> Product Description</label>
                            <Field
                                type="text"
                                as="textarea"
                                name="description"
                                id="description"
                                cols="50"
                                rows="10"
                                className={errors.description && touched.description ? "form-error-color" : ""}
                            />
                            {errors.description && touched.description ? (
                                <div className="form-error-message">{errors.description}</div>
                            ) : null}
                        </div>

                        <div className="new-product-input">
                            <label htmlFor="productPrice"> Product Price</label>
                            <Field
                                name="price"
                                type="number"
                                id="price"
                                className={errors.price && touched.price ? "form-error-color" : ""}
                            />
                            {errors.price && touched.price ? (
                                <div className="form-error-message">{errors.price}</div>
                            ) : null}
                        </div>


                        <div className="new-product-container">
                            <h3>Product Category</h3>
                            <div className="new-product-select-wrapper">
                                <Field
                                    id="category"
                                    as="select"
                                    name="category"
                                    onChange={handleChange}
                                    value={values.category}
                                >
                                    <option value="coffee">From Barista</option>
                                    <option value="package">Packages</option>
                                    <option value="accessory">Accessories</option>
                                </Field>
                                {errors.category && touched.category ? (
                                    <div>{errors.category}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="new-product-container">
                            <input type="submit" value="Add product" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}


export default withRouter(NewProduct) 