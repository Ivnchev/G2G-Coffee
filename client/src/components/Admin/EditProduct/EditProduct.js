import './EditProduct.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EditProduct = (props) => {


    function submitHandler(values) {

        console.log(values);
    }

    return (
        <div className="edit-product-wrapper">
            <Formik
                initialValues={{
                    productName: 'espresso',
                    productImage: 'https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730_960_720.png',
                    productDescription: 'Verry strong coffee',
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
                    <Form className="edit-product-form">
                        <h1 className="edit-product-title">Edit Product</h1>
                        <div className="edit-product-errors">
                            <p className="edit-product-error"></p>
                        </div>
                        <div className="edit-product-container">
                            <img src={"https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730_960_720.png"} alt="" />
                        </div>

                        <div className="edit-product-input">
                            <label htmlFor="product-name"> Product Name</label>
                            <Field
                                autoFocus
                                name="productName"
                                type="text"
                                id="productName"
                                className={errors.productName && touched.productName ? "form-error-color" : ""}
                            />
                            {errors.productName && touched.productName ? (
                                <div className="form-error-message">{errors.productName}</div>
                            ) : null}
                        </div>
                        <div className="edit-product-input">
                            <label htmlFor="product-image"> Product Image</label>
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
                        <div className="edit-product-input">
                            <label htmlFor="product-description"> Product Description</label>
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
                        <div className="edit-product-container">
                            <h3>Product Category</h3>
                            <div className="edit-product-select-wrapper">
                                <select id="product-category">
                                    <option value="barista">From Barista</option>
                                    <option value="packages">Packages</option>
                                    <option value="accessories">Accessories</option>
                                </select>
                                {errors.productCategory && touched.productCategory ? (
                                    <div>{errors.productCategory}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="edit-product-container">
                            <input type="submit" value="Edit product" disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default EditProduct