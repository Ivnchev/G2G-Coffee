import './NewProduct.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const NewProduct = (props) => {


    function submitHandler(values) {

        console.log(values);
    }

    return (
        <div className="new-product-wrapper">
            <Formik
                initialValues={{
                    productName: '',
                    productImage: '',
                    productDescription: '',
                    productCategory: 'barista'
                }}
                validationSchema={Yup.object().shape({
                    productName: Yup.string()
                        .min(2, 'Too Short!')
                        .max(10, 'Too Long!')
                        .required('Required'),
                    productImage: Yup.string()
                        .matches(/^https?:\/\//, 'Invalid URL!')
                        .required('Required'),
                    productDescription: Yup.string()
                        .min(10, 'To Short!')
                        .max(50, 'To Long!')
                        .required('Required')
                })}
                onSubmit={submitHandler}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="new-product-form">
                        <h1 className="new-product-title">New Product</h1>
                        <div className="new-product-errors">
                            <p className="new-product-error"></p>
                        </div>

                        <div className="new-product-input">
                            <label htmlFor="productName"> Product Name</label>
                            <Field
                                name="productName"
                                type="text"
                                id="productName"
                                autoFocus
                                className={errors.productName && touched.productName ? "form-error-color" : ""}
                            />
                            {errors.productName && touched.productName ? (
                                <div className="form-error-message">{errors.productName}</div>
                            ) : null}
                        </div>

                        <div className="new-product-input">
                            <label htmlFor="productImage"> Product Image</label>
                            <Field
                                type="url"
                                name="productImage"
                                id="productImage"
                                placeholder="https://example.com"
                                className={errors.productImage && touched.productImage ? "form-error-color" : ""}
                            />
                            {errors.productImage && touched.productImage ? (
                                <div className="form-error-message">{errors.productImage}</div>
                            ) : null}
                        </div>
                        <div className="new-product-input">
                            <label htmlFor="productDescription"> Product Description</label>
                            <Field
                                type="text"
                                as="textarea"
                                name="productDescription"
                                id="productDescription"
                                cols="50"
                                rows="10"
                                className={errors.productDescription && touched.productDescription ? "form-error-color" : ""}
                            />
                            {errors.productDescription && touched.productDescription ? (
                                <div className="form-error-message">{errors.productDescription}</div>
                            ) : null}
                        </div>
                        <div className="new-product-container">
                            <h3>Product Category</h3>
                            <div className="new-product-select-wrapper">
                                <select id="productCategory" >
                                    <option value="barista">From Barista</option>
                                    <option value="packages">Packages</option>
                                    <option value="accessories">Accessories</option>
                                </select>
                                {errors.productCategory && touched.productCategory ? (
                                    <div>{errors.productCategory}</div>
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


export default NewProduct