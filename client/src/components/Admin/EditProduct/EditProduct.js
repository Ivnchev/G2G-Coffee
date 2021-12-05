import './EditProduct.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState, useContext } from 'react';
import productService from '../../../services/Products/ProductService';
import GlobalContext from '../../../contexts/global/GlobalContext';

const EditProduct = ({
    match,
    history
}) => {

    const mapPropsToValues = () => ({
        title: '',
        imageURL: '',
        description: '',
        category: '',
        price: ''
    })

    const dispatch = useContext(GlobalContext)[1]
    const [product, setProduct] = useState(mapPropsToValues())

    useEffect(() => {
        let isSubscribed = true
        productService.getOneProduct(match.params.id)
            .then(res => {
                if (isSubscribed) {
                    setProduct(s => (res))
                }
            })
        
        return () => {
            isSubscribed = false
        }
    }, [match.params.id])

    function submitHandler(values, actions) {
        productService.editProduct(match.params.id, values)
            .then(res => {
                actions.resetForm(mapPropsToValues())
                history.push('/control-panel?=editProduct')
            }).catch(error => {
                dispatch({ type: 'error', payload: error })
                actions.resetForm()
            })
    }

    return (
        <div className="edit-product-wrapper">
            <Formik
                onSubmit={submitHandler}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .min(5, 'Too Short!')
                        .max(40, 'Too Long!')
                        .required('Required'),
                    imageURL: Yup.string()
                        .matches(/^https?:\/\//, 'Invalid URL!')
                        .required('Required'),
                    description: Yup.string()
                        .min(10, 'To Short!')
                        .max(300, 'To Long!')
                        .required('Required'),
                    price: Yup.number()
                        .min(1, 'At least 1$ !')
                        .max(20, 'Less than 20$ !')
                        .required('Required')
                })}
                enableReinitialize={true}
                initialValues={{
                    title: product.title,
                    imageURL: product.imageURL,
                    description: product.description,
                    category: product.category,
                    price: product.price
                }}
            >
                {({ errors, touched, isSubmitting, values, handleChange, handleBlur }) => (
                    <Form className="edit-product-form">
                        <h1 className="edit-product-title">Edit Product</h1>
                        <div className="edit-product-errors">
                            <p className="edit-product-error"></p>
                        </div>
                        <div className="edit-product-container">
                            <img src={product.imageURL} alt="" />
                        </div>

                        <div className="edit-product-input">
                            <label htmlFor="product-name"> Product Name</label>
                            <Field
                                autoFocus
                                name="title"
                                type="text"
                                id="title"
                                className={errors.title && touched.title ? "form-error-color" : ""}
                                value={values.title}
                                onChange={handleChange}
                            />
                            {errors.title && touched.title ? (
                                <div className="form-error-message">{errors.title}</div>
                            ) : null}
                        </div>
                        <div className="edit-product-input">
                            <label htmlFor="product-image"> Product Image</label>
                            <Field
                                type="url"
                                name="imageURL"
                                id="imageURL"
                                placeholder="https://example.com"
                                className={errors.imageURL && touched.imageURL ? "form-error-color" : ""}
                                value={values.imageURL}
                                onChange={handleChange}
                            />
                            {errors.imageURL && touched.imageURL ? (
                                <div className="form-error-message">{errors.imageURL}</div>
                            ) : null}
                        </div>
                        <div className="edit-product-input">
                            <label htmlFor="product-description"> Product Description</label>
                            <Field
                                as="textarea"
                                type="text"
                                name="description"
                                id="description"
                                cols="50"
                                rows="10"
                                className={errors.description && touched.description ? "form-error-color" : ""}
                                value={values.description}
                                onChange={handleChange}
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

                        <div className="edit-product-container">
                            <h3>Product Category</h3>
                            <div className="edit-product-select-wrapper">
                                <Field
                                    as="select"
                                    id="product-category"
                                    name="category"
                                    onChange={handleChange}
                                    value={values.category}
                                >
                                    <option value="coffee" >From Barista</option>
                                    <option value="package" >Packages</option>
                                    <option value="accessory">Accessories</option>
                                </Field>
                                {errors.category && touched.category ? (
                                    <div>{errors.category}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="edit-product-container">
                            <input type="submit" value="Edit product" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}


export default EditProduct